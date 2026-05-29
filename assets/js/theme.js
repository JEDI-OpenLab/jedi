(() => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const applyTheme = () => {
    const theme = mediaQuery.matches ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", theme);
    document.dispatchEvent(new CustomEvent("jedi:theme-change", { detail: { theme } }));
  };

  applyTheme();
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", applyTheme);
  } else {
    mediaQuery.addListener(applyTheme);
  }
})();
