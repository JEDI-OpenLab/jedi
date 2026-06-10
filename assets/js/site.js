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
  const enhanceArticleTables = (root = document) => {
    root.querySelectorAll(".article-table").forEach((table) => {
      const headers = Array.from(table.querySelectorAll("thead th")).map((cell) => cell.textContent.trim());
      if (!headers.length) {
        return;
      }

      table.querySelectorAll("tbody tr").forEach((row) => {
        Array.from(row.children).forEach((cell, index) => {
          if (headers[index]) {
            cell.dataset.label = headers[index];
          }
        });
      });
    });
  };

  window.jediEnhanceArticleTables = enhanceArticleTables;
  enhanceArticleTables();
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

  const normalize = (value) =>
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");

  const slugFromHref = (href) =>
    href
      .split("/")
      .pop()
      .replace(/\.html?$/i, "");

  const chapters = Array.from(source.querySelectorAll(".chapter-block"))
    .map((block, chapterIndex) => {
      const chapterTitle = block.querySelector(":scope > .d-flex .badge-soft")?.textContent.trim() || "Articles";
      const articles = Array.from(block.querySelectorAll(".article-index-card"))
        .map((card) => {
          const link = card.querySelector(".card-title a[href]");
          if (!link) {
            return null;
          }

          const href = link.getAttribute("href");
          const title = link.textContent.trim();
          const summary = card.querySelector("p")?.textContent.trim() || "";
          const tags = Array.from(card.querySelectorAll(".d-flex .badge-soft"))
            .map((tag) => tag.textContent.trim())
            .filter(Boolean);

          return {
            chapter: chapterTitle,
            chapterIndex,
            href,
            slug: slugFromHref(href),
            title,
            summary,
            tags,
            searchText: normalize(`${title} ${summary} ${tags.join(" ")}`),
          };
        })
        .filter(Boolean);

      return { title: chapterTitle, index: chapterIndex, articles };
    })
    .filter((chapter) => chapter.articles.length);

  const articles = chapters.flatMap((chapter) => chapter.articles);
  if (!articles.length) {
    return;
  }

  const articleBySlug = new Map(articles.map((article) => [article.slug, article]));

  const tagIndex = new Map();
  articles.forEach((article) => {
    article.tags.forEach((tag) => {
      const key = normalize(tag);
      if (!tagIndex.has(key)) {
        tagIndex.set(key, { label: tag, key, count: 0 });
      }
      tagIndex.get(key).count += 1;
    });
  });
  const allTags = Array.from(tagIndex.values()).sort(
    (a, b) => b.count - a.count || a.label.localeCompare(b.label, "fr")
  );

  const renderTags = (tags) =>
    tags.length
      ? `<div class="veille-reader-tags">${tags
          .map(
            (tag) =>
              `<button type="button" class="badge-soft veille-tag-jump" data-tag-key="${escapeHtml(normalize(tag))}">${escapeHtml(tag)}</button>`
          )
          .join("")}</div>`
      : "";

  const tocMarkup = chapters
    .map(
      (chapter) => `
        <details class="veille-toc-chapter" data-chapter-index="${chapter.index}">
          <summary class="veille-toc-chapter-summary">
            <span class="veille-toc-chapter-title">${escapeHtml(chapter.title)}</span>
            <span class="veille-toc-chapter-count" data-chapter-count>${chapter.articles.length}</span>
          </summary>
          <ol class="veille-toc-list">
            ${chapter.articles
              .map(
                (article) => `
                  <li data-article-item="${escapeHtml(article.slug)}">
                    <a class="veille-toc-link" href="${escapeHtml(article.href)}" data-article-id="${escapeHtml(article.slug)}" title="${escapeHtml(article.title)}">
                      ${escapeHtml(article.title)}
                    </a>
                  </li>`
              )
              .join("")}
          </ol>
        </details>`
    )
    .join("");

  const tagsMarkup = allTags
    .map(
      (tag) =>
        `<button type="button" class="veille-tag-chip" data-tag-key="${escapeHtml(tag.key)}" aria-pressed="false">${escapeHtml(tag.label)}<span class="veille-tag-chip-count">${tag.count}</span></button>`
    )
    .join("");

  app.innerHTML = `
    <div class="veille-reader-grid">
      <aside class="page-panel veille-toc-panel">
        <div class="card-body">
          <p class="card-kicker">Sommaire</p>
          <div class="veille-toc-tools">
            <label class="visually-hidden" for="veille-search">Rechercher un article</label>
            <input
              type="search"
              id="veille-search"
              class="form-control veille-search-input"
              placeholder="Rechercher…"
              autocomplete="off"
            >
            <details class="veille-tags-box">
              <summary class="veille-tags-summary">Filtrer par tag</summary>
              <div class="veille-tags-cloud">${tagsMarkup}</div>
            </details>
            <p class="veille-toc-count" data-result-count aria-live="polite"></p>
          </div>
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
            <div data-reader-tags></div>
          </div>
          <div class="veille-reader-content article-body" data-reader-content></div>
          <div class="veille-reader-actions">
            <a class="veille-reader-permalink" data-reader-link href="">
              <i class="fa-solid fa-arrow-up-right-from-square me-2"></i>Ouvrir la page de l'article
            </a>
          </div>
        </div>
      </article>
    </div>`;

  body.classList.add("has-veille-reader");

  const reader = app.querySelector(".veille-reader-panel");
  const titleNode = app.querySelector("[data-reader-title]");
  const chapterNode = app.querySelector("[data-reader-chapter]");
  const tagsNode = app.querySelector("[data-reader-tags]");
  const contentNode = app.querySelector("[data-reader-content]");
  const fullLink = app.querySelector("[data-reader-link]");
  const searchInput = app.querySelector("#veille-search");
  const resultCount = app.querySelector("[data-result-count]");
  const tagsBox = app.querySelector(".veille-tags-box");
  const chapterNodes = Array.from(app.querySelectorAll(".veille-toc-chapter"));
  const links = Array.from(app.querySelectorAll(".veille-toc-link"));
  const tagChips = Array.from(app.querySelectorAll(".veille-tag-chip"));

  let activeTagKey = "";
  let currentSlug = "";

  const updateLinks = (article) => {
    links.forEach((link) => {
      const isActive = link.dataset.articleId === article.slug;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const openChapterOf = (article) => {
    chapterNodes.forEach((node) => {
      if (Number(node.dataset.chapterIndex) === article.chapterIndex) {
        node.open = true;
      }
    });
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
    currentSlug = article.slug;
    updateLinks(article);
    openChapterOf(article);
    chapterNode.textContent = article.chapter;
    titleNode.textContent = article.title;
    tagsNode.innerHTML = renderTags(article.tags);
    contentNode.innerHTML = article.summary ? `<p>${escapeHtml(article.summary)}</p>` : "";
    fullLink.href = article.href;
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
        window.jediEnhanceArticleTables?.(contentNode);
      }
    } catch (error) {
      // Le résumé affiché plus haut sert de repli (ouverture en file://, hors-ligne, etc.).
    } finally {
      reader.classList.remove("is-loading");
      if (focus) {
        reader.focus({ preventScroll: true });
        reader.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const applyFilters = () => {
    const query = normalize(searchInput.value.trim());
    const filtering = Boolean(query) || Boolean(activeTagKey);
    let visibleCount = 0;

    chapterNodes.forEach((node) => {
      const chapterIndex = Number(node.dataset.chapterIndex);
      const chapter = chapters.find((item) => item.index === chapterIndex);
      let chapterVisible = 0;

      chapter.articles.forEach((article) => {
        const item = node.querySelector(`[data-article-item="${CSS.escape(article.slug)}"]`);
        if (!item) {
          return;
        }
        const matchesQuery = !query || article.searchText.includes(query);
        const matchesTag = !activeTagKey || article.tags.some((tag) => normalize(tag) === activeTagKey);
        const visible = matchesQuery && matchesTag;
        item.hidden = !visible;
        if (visible) {
          chapterVisible += 1;
        }
      });

      visibleCount += chapterVisible;
      node.hidden = filtering && chapterVisible === 0;
      node.querySelector("[data-chapter-count]").textContent = chapterVisible;
      if (filtering && chapterVisible > 0) {
        node.open = true;
      }
    });

    if (!filtering) {
      resultCount.textContent = "";
      chapterNodes.forEach((node) => {
        node.hidden = false;
      });
    } else if (visibleCount === 0) {
      resultCount.textContent = "Aucun article ne correspond.";
    } else {
      resultCount.textContent = `${visibleCount} article${visibleCount > 1 ? "s" : ""} trouvé${visibleCount > 1 ? "s" : ""}`;
    }
  };

  const setActiveTag = (tagKey) => {
    activeTagKey = activeTagKey === tagKey ? "" : tagKey;
    tagChips.forEach((chip) => {
      const isActive = chip.dataset.tagKey === activeTagKey;
      chip.classList.toggle("is-active", isActive);
      chip.setAttribute("aria-pressed", String(isActive));
    });
    if (activeTagKey && tagsBox) {
      tagsBox.open = true;
    }
    applyFilters();
  };

  const slugFromHash = () => decodeURIComponent(window.location.hash.replace(/^#billet=/, "")).trim();

  const openFromHash = ({ focus = false } = {}) => {
    const slug = slugFromHash();
    const article = articleBySlug.get(slug);
    if (article && article.slug !== currentSlug) {
      loadArticle(article, { focus });
      return true;
    }
    return false;
  };

  app.addEventListener("click", (event) => {
    const tagJump = event.target.closest(".veille-tag-jump");
    if (tagJump) {
      setActiveTag(tagJump.dataset.tagKey);
      return;
    }

    const chip = event.target.closest(".veille-tag-chip");
    if (chip) {
      setActiveTag(chip.dataset.tagKey);
      return;
    }

    const link = event.target.closest(".veille-toc-link");
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const article = articleBySlug.get(link.dataset.articleId);
    if (!article) {
      return;
    }

    event.preventDefault();
    if (window.location.hash !== `#billet=${article.slug}`) {
      window.location.hash = `billet=${article.slug}`;
    } else {
      loadArticle(article, { focus: true });
    }
  });

  searchInput.addEventListener("input", applyFilters);

  window.addEventListener("hashchange", () => {
    openFromHash({ focus: true });
  });

  // Au chargement : article du hash si présent, sinon premier article (premier chapitre seul ouvert).
  chapterNodes.forEach((node, index) => {
    node.open = index === 0;
  });
  if (!openFromHash()) {
    loadArticle(articles[0]);
  }
})();
