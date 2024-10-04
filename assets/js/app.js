/* initilize counterup */
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});

/* Owl Carousel One */
$(".toure-places").owlCarousel({
  stagePadding: 70,
  loop: true,
  margin: 30,
  dots: false,
  nav: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      margin: 10,
      stagePadding: 30,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

/* Owl Carousel Two */
$(".testimonials").owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

/* Navbar */
function menuToggler() {
  var navbarName = document.querySelector(".navbar");
  navbarName.classList.toggle("open");
}
