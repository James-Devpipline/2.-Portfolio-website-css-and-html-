const navbar = document.quarySelector('.navigation-wrapper');

window.addEventListener("scroll", () => {
  window.scrollY > 0 ? navbar.classlist.add("scrolled") : navbar.classlist.remove('scrolled')
})