const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slides');
const slideWidth = slides[0].offsetWidth;
let activeIndex = 2; // Индекс активного слайда (центральный слайд)

// Установка начального положения слайдера
slider.style.transform = `translateX(-${(activeIndex - 2) * slideWidth}px)`;
slides[activeIndex].classList.add('active');

slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    const offset = (index - 2) * slideWidth;
    slider.style.transform = `translateX(-${offset}px)`;
    activeIndex = index;
    removeActiveClasses();
    slide.classList.add('active');
  });
});

function removeActiveClasses() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
}
