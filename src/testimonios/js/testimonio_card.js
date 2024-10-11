const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// Mostrar los tres testimonios actuales
function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        // Mostrar los testimonios en su posición correspondiente
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
}

// Navegar al siguiente testimonio
document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Aumentar el índice
    updateCarousel();
});

// Navegar al testimonio anterior
document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Disminuir el índice
    updateCarousel();
});

// Inicializar el carrusel
updateCarousel();
