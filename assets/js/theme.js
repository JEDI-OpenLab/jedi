(() => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const applyTheme = () => {
    document.documentElement.setAttribute("data-bs-theme", mediaQuery.matches ? "dark" : "light");
  };

  applyTheme();
  mediaQuery.addEventListener("change", applyTheme);
})();
