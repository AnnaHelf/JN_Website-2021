/* Back to top */
function scrollBackToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const jennyLogoBtn = document.querySelector(".jenny_nguyen_logo");
jennyLogoBtn.addEventListener("click", scrollBackToTop);

/* cursor */

const cursor = document.querySelector(".hiddenCursor");
const hiddenInfoDiv = document.querySelector(".jennyNguyen-infos");

hiddenInfoDiv.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + e.pageY + "px; left: " + e.pageX + "px"
  );
});

hiddenInfoDiv.addEventListener("mouseover", (e) => {
  hiddenInfoDiv.style.border = "none";
});
hiddenInfoDiv.addEventListener("mouseleave", (e) => {
  hiddenInfoDiv.style.border = "";
  e.target.classList.add("transition");
});

/* Contact hover effect */

const contactLeftSide = document.querySelector(".contact_me-nameEtc");
const contactRightSide = document.querySelector(".contact_me-message");

function changeBgColorLeft() {
  contactLeftSide.style.backgroundColor = "#7a7987";
}
function changeBgColorRight() {
  contactRightSide.style.backgroundColor = "#93929e";
}

contactLeftSide.addEventListener("mouseover", function () {
  changeBgColorLeft();
  changeBgColorRight();
  contactRightSide.style.marginTop = "1rem";
  contactRightSide.classList.add("transition");
});
contactLeftSide.addEventListener("mouseleave", function () {
  contactLeftSide.style.backgroundColor = "";
  contactRightSide.style.backgroundColor = "";
  contactRightSide.style.marginTop = "";
});

contactRightSide.addEventListener("mouseover", function () {
  changeBgColorLeft();
  changeBgColorRight();
  contactLeftSide.style.marginTop = "1rem";
  contactLeftSide.classList.add("transition");
});
contactRightSide.addEventListener("mouseleave", function () {
  contactLeftSide.style.backgroundColor = "";
  contactRightSide.style.backgroundColor = "";
  contactLeftSide.style.marginTop = "";
});

/* footer */

const arrowTop = document.querySelector(".footer_top");
const arrowDescrip = document.querySelector(".footer_top-text");

arrowTop.addEventListener("mouseover", (e) => {
  arrowDescrip.style.display = "block";
});

arrowTop.addEventListener("mouseleave", (e) => {
  arrowDescrip.style.display = "";
});
