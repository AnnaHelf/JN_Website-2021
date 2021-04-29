$(function () {
  let prevBtn = $("a.button_prev"),
    nextBtn = $("a.button_next"),
    checkbox = $("#toggle_animation");

  // Slideshow Elements
  let slider = $("#slideshow"),
    sliderUl = slider.children("ul"),
    slides = sliderUl.children("li"),
    slideCount = slides.length,
    slideWidth = slides.width(),
    slideHeight = slides.height(),
    sliderUlWidth = slideCount * slideWidth,
    sliderInterval;

  slider.css({
    width: slideWidth,
    height: slideHeight,
  });

  sliderUl.css({
    width: sliderUlWidth,
    marginLeft: -slideWidth,
  });

  slides.last().prependTo(sliderUl);

  //Events

  prevBtn.on("click", moveLeft);
  nextBtn.on("click", moveRight);
  checkbox.on("click", onSliderToggle);

  //Functions

  function moveLeft(e) {
    e.preventDefault();

    sliderUl.animate(
      {
        left: +slideWidth,
      },
      200,
      function () {
        $(this).children("li").last().prependTo(sliderUl);
        $(this).css("left", "");
      }
    );
  }

  function moveRight(e) {
    if (e) {
      e.preventDefault();
    }

    sliderUl.animate(
      {
        left: -slideWidth,
      },
      200,
      function () {
        $(this).children("li").first().appendTo(sliderUl);
        $(this).css("left", "");
      }
    );
  }

  function onSliderToggle(e) {
    let check = $(e.currentTarget);
    if (check.is(":checked")) {
      sliderInterval = setInterval(moveRight, 3000);
    } else {
      // Stop interval
      clearInterval(sliderInterval);
    }
  }
});
