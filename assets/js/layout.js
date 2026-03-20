(() => {
  const siteVersion = "2026-03-20.1";
  const siteTagline = "Open pedagogy, engineered with care.";
  const pathname = window.location.pathname;
  const currentFile = pathname.split("/").pop() || "index.html";
  const isVeilleArticle = pathname.includes("/veille/") && currentFile !== "veille.html";
  const root = isVeilleArticle ? "../" : "";

  const navItems = [
    { id: "home", href: `${root}index.html`, icon: "fa-house", label: "Accueil" },
    { id: "pedagogie", href: `${root}pedagogie.html`, icon: "fa-chalkboard-user", label: "Pédagogie" },
    { id: "veille", href: `${root}veille.html`, icon: "fa-rss", label: "Veille" },
    { id: "about", href: `${root}about.html`, icon: "fa-circle-info", label: "À propos" },
  ];

  const navDesktop = navItems
    .map(
      ({ id, href, icon, label }) => `
            <a href="${href}" class="px-3 py-2 text-white text-decoration-none d-flex align-items-center rounded-3 nav-pill-link" data-page-link="${id}">
              <i class="fa-solid ${icon}"></i><span class="ms-1">${label}</span>
            </a>`
    )
    .join("");

  const navMobile = navItems
    .map(
      ({ id, href, icon, label }) => `
          <a href="${href}" class="btn btn-outline-primary d-flex align-items-center" data-page-link="${id}">
            <i class="fa-solid ${icon} me-2"></i>${label}
          </a>`
    )
    .join("");

  const headerMarkup = `
    <div class="fixed-top site-topbar" role="navigation" aria-label="Navigation principale">
      <div class="container-fluid px-3 py-2 d-flex align-items-center justify-content-between gap-3">
        <a href="${root}index.html" class="brand-lockup d-flex align-items-center text-decoration-none text-white">
          <img src="${root}PIX/jedi-openlab.png" alt="JEDI-OpenLab" class="brand-mark">
          <span class="ms-2">
            <span class="brand-title-top d-block fw-semibold">JEDI-OpenLab</span>
            <span class="brand-subtitle-top d-block">Jean pour l’Éducation, le Design et l’Innovation</span>
          </span>
        </a>
        <nav class="d-flex align-items-center">
          <button class="btn btn-light btn-sm d-inline-flex d-lg-none align-items-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuMobile" aria-controls="menuMobile" aria-label="Ouvrir le menu">
            <i class="fa-solid fa-bars"></i>
          </button>
          <div class="d-none d-lg-flex gap-2 nav-shell p-1 rounded-4 flex-wrap overflow-auto">
            ${navDesktop}
          </div>
        </nav>
      </div>
    </div>
    <div class="site-spacer"></div>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="menuMobile" aria-labelledby="menuMobileLabel">
      <div class="offcanvas-header">
        <h2 class="offcanvas-title h5 offcanvas-brand" id="menuMobileLabel"><i class="fa-solid fa-flask me-2"></i>JEDI-OpenLab</h2>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Fermer"></button>
      </div>
      <div class="offcanvas-body">
        <div class="d-grid gap-2">
          ${navMobile}
        </div>
      </div>
    </div>`;

  const footerMarkup = `
    <footer class="footer-shell border-top py-4">
      <div class="container d-flex flex-column flex-lg-row justify-content-between align-items-center gap-2 text-center text-lg-start">
        <span class="footer-text small"><i class="fa-solid fa-flask me-2 text-warning"></i><strong>JEDI-OpenLab</strong> · ${siteTagline}</span>
        <span class="footer-version small">Version éditoriale ${siteVersion}</span>
      </div>
    </footer>`;

  document.querySelectorAll("[data-site-header]").forEach((node) => {
    node.outerHTML = headerMarkup;
  });

  document.querySelectorAll("[data-site-footer]").forEach((node) => {
    node.outerHTML = footerMarkup;
  });
})();
