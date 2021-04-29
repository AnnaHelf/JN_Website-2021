let images = document.querySelectorAll(".fourth");

images.forEach((img) => {
  img.addEventListener("mouseover", (e) => {
    console.log("lsallal");
    e.target.style.transform = "translateZ(3px)";
  });
});
