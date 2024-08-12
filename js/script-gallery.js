// Obtener el modal
const modal = document.getElementById('galleryModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');

// Obtener todos los elementos de la galería
const galleryItems = document.querySelectorAll('.gallery-item img');

// Añadir eventos de clic a cada imagen
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Obtener el elemento de cierre
const closeBtn = document.querySelector('.close');

// Cuando el usuario hace clic en el botón de cierre, cerrar el modal
closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// Cuando el usuario hace clic fuera de la imagen, cerrar el modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
