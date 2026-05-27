(() => {
  const body = document.body;
  const currentPage = body.dataset.page;
  if (currentPage) {
    document.querySelectorAll("[data-page-link]").forEach((link) => {
      if (link.dataset.pageLink === currentPage) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });
  }
})();

(() => {
  const body = document.body;
  if (body.dataset.page !== "veille") {
    return;
  }

  const app = document.getElementById("veille-reader-app");
  const source = document.getElementById("veille-source");
  if (!app || !source) {
    return;
  }

  const escapeHtml = (value) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const chapters = Array.from(source.querySelectorAll(".chapter-block"))
    .map((block) => {
      const chapterTitle = block.querySelector(":scope > .d-flex .badge-soft")?.textContent.trim() || "Articles";
      const articles = Array.from(block.querySelectorAll(".article-index-card"))
        .map((card) => {
          const link = card.querySelector(".card-title a[href]");
          if (!link) {
            return null;
          }

          return {
            chapter: chapterTitle,
            href: link.getAttribute("href"),
            title: link.textContent.trim(),
            summary: card.querySelector("p")?.textContent.trim() || "",
            tags: Array.from(card.querySelectorAll(".d-flex .badge-soft"))
              .map((tag) => tag.textContent.trim())
              .filter(Boolean),
          };
        })
        .filter(Boolean);

      return { title: chapterTitle, articles };
    })
    .filter((chapter) => chapter.articles.length);

  const articles = chapters.flatMap((chapter) => chapter.articles);
  if (!articles.length) {
    return;
  }

  const renderTags = (tags) =>
    tags.length
      ? `<div class="veille-reader-tags">${tags.map((tag) => `<span class="badge-soft">${escapeHtml(tag)}</span>`).join("")}</div>`
      : "";

  const tocMarkup = chapters
    .map(
      (chapter, chapterIndex) => `
        <div class="veille-toc-chapter">
          <p class="veille-toc-chapter-title">${escapeHtml(chapter.title)}</p>
          <ol class="veille-toc-list">
            ${chapter.articles
              .map((article, articleIndex) => {
                const articleId = `veille-article-${chapterIndex}-${articleIndex}`;
                article.id = articleId;
                return `
                  <li>
                    <a class="veille-toc-link" href="${escapeHtml(article.href)}" data-article-id="${articleId}">
                      ${escapeHtml(article.title)}
                    </a>
                  </li>`;
              })
              .join("")}
          </ol>
        </div>`
    )
    .join("");

  app.innerHTML = `
    <div class="veille-reader-grid">
      <aside class="page-panel veille-toc-panel">
        <div class="card-body">
          <p class="card-kicker">Sommaire</p>
          <nav class="veille-toc-nav" aria-label="Articles de veille">
            ${tocMarkup}
          </nav>
        </div>
      </aside>

      <article class="page-panel veille-reader-panel" id="veille-reader-panel" tabindex="-1">
        <div class="card-body">
          <div class="veille-reader-header">
            <p class="card-kicker" data-reader-chapter></p>
            <h2 class="veille-reader-title" data-reader-title></h2>
            <p class="veille-reader-summary" data-reader-summary></p>
            <div data-reader-tags></div>
          </div>
          <div class="veille-reader-content article-body" data-reader-content></div>
          <div class="veille-reader-actions">
            <a class="btn btn-primary" data-reader-link href="">
              <i class="fa-solid fa-arrow-up-right-from-square me-2"></i>Lire l'article complet
            </a>
          </div>
        </div>
      </article>
    </div>`;

  body.classList.add("has-veille-reader");

  const reader = app.querySelector(".veille-reader-panel");
  const titleNode = app.querySelector("[data-reader-title]");
  const chapterNode = app.querySelector("[data-reader-chapter]");
  const summaryNode = app.querySelector("[data-reader-summary]");
  const tagsNode = app.querySelector("[data-reader-tags]");
  const contentNode = app.querySelector("[data-reader-content]");
  const fullLink = app.querySelector("[data-reader-link]");
  const links = Array.from(app.querySelectorAll(".veille-toc-link"));

  const updateLinks = (article) => {
    links.forEach((link) => {
      const isActive = link.dataset.articleId === article.id;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const renderSummary = (article) => {
    updateLinks(article);
    chapterNode.textContent = article.chapter;
    titleNode.textContent = article.title;
    summaryNode.textContent = article.summary;
    tagsNode.innerHTML = renderTags(article.tags);
    contentNode.innerHTML = article.summary ? `<p>${escapeHtml(article.summary)}</p>` : "";
    fullLink.href = article.href;
  };

  const normalizeInsertedLinks = (root, article) => {
    const articleUrl = new URL(article.href, window.location.href);
    root.querySelectorAll("a[href]").forEach((link) => {
      const value = link.getAttribute("href");
      if (value && !value.startsWith("#")) {
        link.setAttribute("href", new URL(value, articleUrl).toString());
      }
    });

    root.querySelectorAll("img[src], source[src], video[src], audio[src]").forEach((node) => {
      const value = node.getAttribute("src");
      if (value) {
        node.setAttribute("src", new URL(value, articleUrl).toString());
      }
    });
  };

  const loadArticle = async (article, { focus = false } = {}) => {
    renderSummary(article);
    reader.classList.add("is-loading");

    try {
      const response = await fetch(article.href);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const html = await response.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      const articleBody = doc.querySelector(".article-body");
      if (articleBody) {
        const clone = articleBody.cloneNode(true);
        normalizeInsertedLinks(clone, article);
        contentNode.innerHTML = clone.innerHTML;
      }
    } catch (error) {
      contentNode.innerHTML = article.summary ? `<p>${escapeHtml(article.summary)}</p>` : "";
    } finally {
      reader.classList.remove("is-loading");
      if (focus) {
        reader.focus({ preventScroll: true });
      }
    }
  };

  app.addEventListener("click", (event) => {
    const link = event.target.closest(".veille-toc-link");
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const article = articles.find((item) => item.id === link.dataset.articleId);
    if (!article) {
      return;
    }

    event.preventDefault();
    loadArticle(article, { focus: true });
  });

  loadArticle(articles[0]);
})();
