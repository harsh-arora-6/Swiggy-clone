// here I am unable to do cartLink.querySelect(...) don't know why??
const cartLink = document.querySelector(".cart .item-link");
const tooltipCart = document.querySelector(".cart .tooltip-box");

/**
 * There is a small transition from link to tooltip
 *  That is why I have put slow appearance first time then
 *  hide takes 0.5s
 *  but then when tooltip is entered fast showing is enabled (faster than hiding)
 * So it appears that tooltip is there the whole time
 **/

cartLink.addEventListener("mouseenter", (e) => {
  tooltipCart.classList.remove("hide");
  const hasShowFast = tooltipCart.classList.contains("show-fast");
  if (hasShowFast) return;
  tooltipCart.classList.add("show-slow");
});

cartLink.addEventListener("mouseleave", (e) => {
  tooltipCart.classList.remove("show-slow");
  tooltipCart.classList.remove("show-fast");
  tooltipCart.classList.add("hide");
});

tooltipCart.addEventListener("mouseenter", (e) => {
  tooltipCart.classList.remove("hide");
  tooltipCart.classList.add("show-fast");

  cartLink.querySelector(".nav-item-text").classList.add("active-text");
  cartLink.querySelector(".nav-item-icon").classList.add("active-cart-icon");
  cartLink.querySelector(".cart-count").classList.add("active-text");
});

tooltipCart.addEventListener("mouseleave", (e) => {
  tooltipCart.classList.remove("show-fast");
  tooltipCart.classList.add("hide");

  cartLink.querySelector(".nav-item-text").classList.remove("active-text");
  cartLink.querySelector(".nav-item-icon").classList.remove("active-cart-icon");
  cartLink.querySelector(".cart-count").classList.remove("active-text");
});

const signInLink = document.querySelector(".signin .item-link");
const tooltipSignIn = document.querySelector(".signin .tooltip-box");

signInLink.addEventListener("mouseenter", (e) => {
  if (signInLink.getAttribute("loggedIn") === "false") return;
  const hasShowFast = tooltipSignIn.classList.contains("show-fast");
  if (hasShowFast) return;
  tooltipSignIn.classList.remove("hide");
  tooltipSignIn.classList.add("show-slow");
});

signInLink.addEventListener("mouseleave", (e) => {
  if (signInLink.getAttribute("loggedIn") === "false") return;
  tooltipSignIn.classList.remove("show-slow");
  tooltipSignIn.classList.remove("show-fast");
  tooltipSignIn.classList.add("hide");
});

tooltipSignIn.addEventListener("mouseenter", (e) => {
  signInLink.querySelector(".nav-item-text").classList.add("active-text");
  signInLink.querySelector(".nav-item-icon").classList.add("active-icon");

  tooltipSignIn.classList.remove("hide");
  tooltipSignIn.classList.add("show-fast");
});

tooltipSignIn.addEventListener("mouseleave", (e) => {
  signInLink.querySelector(".nav-item-text").classList.remove("active-text");
  signInLink.querySelector(".nav-item-icon").classList.remove("active-icon");

  tooltipSignIn.classList.remove("show-fast");
  tooltipSignIn.classList.add("hide");
});
