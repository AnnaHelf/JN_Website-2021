$(".nav_top-left_side-dropdown_container-dropdownbtn").hover(
  function () {
    $(".nav_top-dropdown_items").animate(
      {
        opacity: "1",
      },
      200
    );
  },
  function () {
    setTimeout(function () {
      $(".nav_top-dropdown_items").animate(
        {
          opacity: "0",
        },
        200
      );
    }, 6000);
  }
);
