const nav_links = document.querySelector(".nav-links");
const nav_toggle = document.querySelector(".nav-toggle");

nav_toggle.addEventListener("click", () => {
  nav_links.classList.toggle("dblock");
});

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  // scrollHorizontally: false,
  showActiveTooltip: true,
  scrollingSpeed: 2000,
  slidesNavigation: true,
  easing: "linear",
});
