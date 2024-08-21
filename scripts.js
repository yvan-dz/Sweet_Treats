AOS.init();

function toggleGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    const galleryButton = document.getElementById('toggleGalleryButton');
    const initialGalleryRow = document.getElementById('initialGalleryRow');

    if (!galleryGrid.classList.contains('show')) {
        galleryGrid.classList.add('show');
        galleryGrid.style.display = 'grid'; // Affiche la grille
        galleryButton.innerText = "Voir moins de photos";
        initialGalleryRow.style.display = 'none'; // Masque la section initiale
    } else {
        galleryGrid.classList.remove('show');
        galleryGrid.style.display = 'none'; // Masque la grille
        galleryButton.innerText = "Voir toutes les photos";
        initialGalleryRow.style.display = 'flex'; // Réaffiche la section initiale
    }
}


// Code pour gérer l'affichage des images dans une modal avec navigation
let currentSlideIndex = 0;
const images = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");

function openModal(index) {
    modal.style.display = "block";
    showSlide(index);
}

function closeModal() {
    modal.style.display = "none";
}

function changeSlide(n) {
    showSlide(currentSlideIndex + n);
}

function showSlide(index) {
    if (index >= images.length) { index = 0; }
    if (index < 0) { index = images.length - 1; }
    currentSlideIndex = index;
    modalImage.src = images[currentSlideIndex].src;
    captionText.innerHTML = images[currentSlideIndex].alt;
}

// Attaching event listeners to gallery images
images.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
});
