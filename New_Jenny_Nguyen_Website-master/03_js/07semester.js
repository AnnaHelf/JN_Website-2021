/* header */
const headerInfo = document.querySelector(".voice_over");
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
});
