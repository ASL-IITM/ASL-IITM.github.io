$(document).ready(function(){
  // Owl Carousel
  if ($(".owl-carousel-fullwidth").length) {
    $(".owl-carousel-fullwidth").owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: true,
      navText: ['&#10094;', '&#10095;'],
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true
    });
  }
});
