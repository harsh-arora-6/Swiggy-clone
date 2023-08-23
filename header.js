const links = document.querySelectorAll(".item-link");
const cartCount = document.querySelector(".cart-count");

// modify nav item on visiting its link
links.forEach((link, index) => {
  if (index === 0) {
    const navText = link.querySelector(".nav-item-text");
    const navIcon = link.querySelector(".nav-item-icon");
    link.addEventListener("mouseenter", (e) => {
      e.preventDefault();
      navText.classList.add("active-text");
      navIcon.classList.add("active-cart-icon");
      cartCount.classList.add("active-text");
    });
    link.addEventListener("mouseleave", (e) => {
      e.preventDefault();
      navText.classList.remove("active-text");
      navIcon.classList.remove("active-cart-icon");
      cartCount.classList.remove("active-text");
    });
  } else {
    const navText = link.querySelector(".nav-item-text");
    const navIcon = link.querySelector(".nav-item-icon");
    link.addEventListener("mouseenter", (e) => {
      e.preventDefault();
      navText.classList.add("active-text");
      navIcon.classList.add("active-icon");
    });
    link.addEventListener("mouseleave", (e) => {
      e.preventDefault();
      navText.classList.remove("active-text");
      navIcon.classList.remove("active-icon");
    });
  }
});
