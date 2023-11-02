
      // Espera a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Encuentra el elemento del carrusel
    var myCarousel = document.getElementById('carouselExampleDark');

    // Crea una instancia del carrusel de Bootstrap
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000, // Cambia aquí el intervalo entre las transiciones de las imágenes (en milisegundos)
        pause: 'hover' // Pausa el carrusel al pasar el mouse sobre él
    });
});
