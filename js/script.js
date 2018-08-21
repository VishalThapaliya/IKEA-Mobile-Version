$(document).ready(function() {
  $(".bxslider").bxSlider({
    mode: "horizontal",
    auto: true,
    slideWidth: 600
  });
});

function openSlideMenu() {
  document.getElementById("side-menu").style.width = "60%";
}

function closeSideMenu() {
  document.getElementById("side-menu").style.width = "0";
}
