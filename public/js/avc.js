function $(selector) {
  return document.querySelector(selector);
}
let dropdownToggglerAbout;
let navDropdownContainerAbout;

let dropdownToggglerPricing;
let navDropdownContainerPricing;

document.addEventListener("DOMContentLoaded", () => {
  // -------------------- about us -----------------------
  dropdownToggglerAbout = $(".w-dropdown-about");
  navDropdownContainerAbout = $(".w-dropdown-list");

  dropdownToggglerAbout.addEventListener(
    "mouseenter",
    function (event) {
      navDropdownContainerAbout.classList.add("w--open");
    },
    false
  );

  dropdownToggglerAbout.addEventListener(
    "mouseleave",
    function (event) {
      navDropdownContainerAbout.classList.remove("w--open");
    },
    false
  );

  // -------------------- pricing -----------------------

  dropdownToggglerPricing = $(".w-dropdown-pricing");
  navDropdownContainerPricing = $(".w-dropdown-pricing>.w-dropdown-list");

  dropdownToggglerPricing.addEventListener(
    "mouseenter",
    function (event) {
      navDropdownContainerPricing.classList.add("w--open");
    },
    false
  );

  dropdownToggglerPricing.addEventListener(
    "mouseleave",
    function (event) {
      navDropdownContainerPricing.classList.remove("w--open");
    },
    false
  );
});
