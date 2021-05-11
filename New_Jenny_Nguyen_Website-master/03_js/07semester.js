/* On click big img on the left */

const images = document.querySelectorAll(".small");
const current = document.querySelector(".bigImg_img");

images.forEach((img) => {
  img.addEventListener("click", imageClick);
});

function imageClick(e) {
  current.src = e.target.src;
}
