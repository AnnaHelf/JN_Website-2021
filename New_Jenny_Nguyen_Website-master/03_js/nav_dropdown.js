$(".nav_left-dropdown-btn").hover(
  function () {
    $(".nav_left-dropdown_items").animate(
      {
        opacity: "1",
      },
      200
    );
  },
  function () {
    setTimeout(function () {
      $(".nav_left-dropdown_items").animate(
        {
          opacity: "0",
        },
        200
      );
    }, 6000);
  }
);

/* SMALL */
const circleDownMenu = document.querySelector(".click");
const circleUpMenu = document.querySelector(".clicked");
const smallMenu = document.querySelector(".nav_small_items");

circleDownMenu.addEventListener("click", (e) => {
  console.log("clicked this");
  smallMenu.style.display = "block";
  circleUpMenu.style.display = "block";
  circleDownMenu.classList.add("clicked");
});

circleUpMenu.addEventListener("click", (c) => {
  smallMenu.style.display = "";
  circleDownMenu.classList.remove("clicked");
  circleUpMenu.style.display = "";
});
