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
