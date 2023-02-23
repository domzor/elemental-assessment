// Smooth Scroll On Links

$(document).ready(function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

// Slider

$(document).ready(function () {
  let slideCount = $(".slider ul > li").length;
  let sliderWidth = 100 * (slideCount + 1) + "%";

  $(".slider ul").css({ width: sliderWidth });
  $(".slider ul > li:last-child").prependTo($(".slider ul"));

  $(".slider ul > li").each(function () {
    $(this).css("width", 100 / (slideCount + 1) + "%");
  });

  function slideRight() {
    $(".slider ul").animate(
      {
        left: -$(".slider ul > li").width(),
      },
      400,
      function () {
        $(".slider ul > li:first-child").appendTo($(".slider ul"));
        $(".slider ul").css("left", "");
      }
    );
  }

  $(".slider-next").click(function (e) {
    e.preventDefault();
    slideRight();
  });
});
