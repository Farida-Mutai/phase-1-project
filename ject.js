// ject.js

document.addEventListener("DOMContentLoaded", function() {
    const productImages = document.querySelectorAll('.product-image');

    productImages.forEach(imageContainer => {
        const originalImage = imageContainer.querySelector('img');
        const hoverImageSrc = imageContainer.getAttribute('data-hover-image');

        imageContainer.addEventListener('mouseenter', () => {
            originalImage.src = hoverImageSrc;
        });

        imageContainer.addEventListener('mouseleave', () => {
            originalImage.src = originalImage.getAttribute('src');
        });
    });
});
