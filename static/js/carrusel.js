const puntos = document.querySelectorAll('.punto');
const carrouselImages = document.querySelectorAll('.img');

puntos.forEach((punto, index) => {
  punto.addEventListener('click', () => {
    puntos.forEach((punto) => punto.classList.remove('activo'));
    carrouselImages.forEach((image) => image.classList.remove('select'));

    punto.classList.add('activo');
    carrouselImages[index].classList.add('select');
  });
});