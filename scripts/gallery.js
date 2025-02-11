document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    const images = document.querySelectorAll(".gallery img");
    const prevButton = document.querySelector(".arrow-button.left");
    const nextButton = document.querySelector(".arrow-button.right");
    let currentIndex = 0;
    const imageWidth = images[0].clientWidth; // Get single image width

    function updateGallery() {
        const offset = -currentIndex * imageWidth;
        gallery.style.transform = `translateX(${offset}px)`;
    }

    function gallerySlide(index) {
        if (index >= 1 && index <= images.length) {
            currentIndex = index - 1; // Convert to zero-based index
            updateGallery();
        }
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 4;
        updateGallery();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex < images.length - 4) ? currentIndex + 1 : 0;
        updateGallery();
    });

    // Expose gallerySlide to global scope
    window.gallerySlide = gallerySlide;
});
