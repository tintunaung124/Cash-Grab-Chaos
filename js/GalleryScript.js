const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.container img');

let currentIndex = 0;

const lightboxImg = document.createElement('img');

const prevButton = document.createElement('button');
prevButton.innerHTML = '&#10094;';
prevButton.id = 'prev';

const nextButton = document.createElement('button');
nextButton.innerHTML = '&#10095;';
nextButton.id = 'next';

const closeButton = document.createElement('button');
closeButton.innerHTML = '&times;';
closeButton.id = 'close';

lightbox.appendChild(lightboxImg);
lightbox.appendChild(prevButton);
lightbox.appendChild(nextButton);
lightbox.appendChild(closeButton);

function showLightbox() {
    lightboxImg.src = images[currentIndex].src;
}

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showLightbox();
        lightbox.classList.add('active');
    });
})

prevButton.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showLightbox();
});

nextButton.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showLightbox();
});

closeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    lightbox.classList.remove('active');
});
     