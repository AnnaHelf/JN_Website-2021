const images = document.querySelectorAll(".firstSemImg");
const gridGallery = document.querySelector(".grid_gallery");
const lightBox = document.querySelector(".lightBox");
const boxImg = document.querySelector(".lightBox_img");
const closeX = document.querySelector(".lightBox_close");

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    lightBoxOpen();
  });
});
images.forEach((img) => {
  img.addEventListener("click", clickedImage);
});

function lightBoxOpen() {
  lightBox.style.left = "0";
  lightBox.classList.add("transition");
}
function lightBoxClose() {
  lightBox.style.left = "";
}
function clickedImage(e) {
  boxImg.src = e.target.src;
}
closeX.addEventListener("click", function () {
  console.log("close works");
  lightBoxClose();
});
