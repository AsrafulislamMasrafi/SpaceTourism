const nav = document.querySelector("nav");
const open = document.querySelector(".open");

open.addEventListener("click", () => {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    open.querySelector(".openIcon").src = "../assets/shared/icon-close.svg";
  } else {
    open.querySelector(".openIcon").src = "../assets/shared/icon-hamburger.svg";
  }
});

// tab active
const navList = document.querySelectorAll(".navList");
navList.forEach((li) => {
  li.addEventListener("click", function (e) {
    navList.forEach((list) => {
      list.classList.remove("navActive");
    });
    li.classList.add("navActive");
  });
});
