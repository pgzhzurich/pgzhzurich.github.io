// Import Bootstrap JS
import * as bootstrap from "bootstrap";

// Handle gallery image clicks to show correct slide
document.querySelectorAll("#imageGallery > div > img").forEach((div, index) => {
  div.addEventListener("click", function () {
    const slideIndex = this.dataset.slideIndex;
    const carousel = new bootstrap.Carousel("#galleryCarousel");

    if (carousel) carousel.to(slideIndex);
  });
});

// Fotos page: open carousel at clicked image index
document
  .querySelectorAll('#fotos-page [data-bs-toggle="modal"][data-index]')
  .forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const year = thumb.dataset.year;
      const slideIndex = parseInt(thumb.dataset.index, 10);
      const carouselEl = document.getElementById("carousel-" + year);
      if (!carouselEl) return;

      // Set active item immediately on click, before modal opens
      const items = carouselEl.querySelectorAll(".carousel-item");
      items.forEach((item) => item.classList.remove("active"));
      if (items[slideIndex]) items[slideIndex].classList.add("active");
    });
  });

// Keyboard navigation in modal gallery
document.addEventListener("keydown", (e) => {
  const openModal = document.querySelector(".modal.show");
  if (!openModal) return;
  const carouselEl = openModal.querySelector(".carousel");
  if (!carouselEl) return;
  const c = bootstrap.Carousel.getOrCreateInstance(carouselEl);
  if (!c) return;
  if (e.key === "ArrowRight") {
    e.preventDefault();
    c.next();
  }
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    c.prev();
  }
});
