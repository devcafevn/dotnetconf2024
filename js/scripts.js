// Function to handle scroll event
window.onscroll = function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    // When scroll position is more than 50px from top
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
