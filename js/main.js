document.addEventListener("DOMContentLoaded", () => {
  Array.from(document.getElementsByTagName("a")).forEach((a) => {
    const a_href = a.getAttribute("href");
    if (!a_href || !a_href.includes("http")) {
      a.setAttribute("target", "_self");
    }
  });

  const menu = document.getElementById("menu-container");
  const top = document.getElementById("top-container");
  const viewHeight = window.innerHeight;
  const topHeight = top.offsetHeight;
  menu.style.height = `${viewHeight - topHeight}px`;
});
