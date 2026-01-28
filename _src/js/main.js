// Import Bootstrap JS
import * as bootstrap from "bootstrap";

// Handle gallery image clicks to show correct slide
document.querySelectorAll("#imageGallery > div > img").forEach((div, index) => {
  div.addEventListener("click", function () {
    const slideIndex = this.dataset.slideIndex;
    console.log(slideIndex);
    const carousel = new bootstrap.Carousel("#galleryCarousel");

    if (carousel) carousel.to(slideIndex);
  });
});
