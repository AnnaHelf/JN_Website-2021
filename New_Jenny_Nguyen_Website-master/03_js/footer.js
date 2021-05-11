/* footer - arrow hover show text */

const arrowTop = document.querySelector(".footer_top");
const arrowDescrip = document.querySelector(".footer_top-text");

arrowTop.addEventListener("mouseover", (e) => {
  console.log("mouseover works");
  arrowDescrip.style.display = "block";
});

arrowTop.addEventListener("mouseleave", (e) => {
  console.log("mouseleave works");
  arrowDescrip.style.display = "";
});
