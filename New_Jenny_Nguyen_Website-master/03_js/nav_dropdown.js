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

/* xsmall */

if ($(window).width() < 600) {
  console.log("lol");
  $(".nav_left-dropdown_items").hide();
  $(".nav_left-dropdown-btn").click(function () {
    console.log("lalala");
    $(".nav_xsmall").show();
  });
}

$(".fa-arrow-left").click(function () {
  $(".nav_xsmall").hide();
  /* $(".nav_xsmall").css("overflowY", "hidden"); */
});
