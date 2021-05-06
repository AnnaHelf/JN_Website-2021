/* header */
/* const headerInfo = document.querySelector(".voice_over");
const infoBox = document.querySelector(".voice_over-header");

headerInfo.addEventListener("mouseover", (e) => {
  console.log("aeobfcwepofcn");
  headerInfo.style.height = "35rem";
  headerInfo.classList.add("transition");
  infoBox.style.height = "35rem";
  infoBox.classList.add("transition");
});
headerInfo.addEventListener("mouseleave", (e) => {
  console.log("aeobfcwepofcn");
  headerInfo.style.height = "";
  infoBox.style.height = "";
}); */

const images = document.querySelectorAll(".small");
const current = document.querySelector(".bigImg_img");

images.forEach((img) => {
  img.addEventListener("click", imageClick);
});

function imageClick(e) {
  current.src = e.target.src;
}
