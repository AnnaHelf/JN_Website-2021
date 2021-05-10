/* footer */

const arrowTop = document.querySelector(".footer_top");
const arrowDescrip = document.querySelector(".footer_top-text");

arrowTop.addEventListener("mouseover", (e) => {
  arrowDescrip.style.display = "block";
});

arrowTop.addEventListener("mouseleave", (e) => {
  arrowDescrip.style.display = "";
});
