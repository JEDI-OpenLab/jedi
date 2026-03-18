(() => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const setTheme = () => {
    document.documentElement.setAttribute("data-bs-theme", prefersDark.matches ? "dark" : "light");
  };

  setTheme();
  prefersDark.addEventListener("change", setTheme);

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
