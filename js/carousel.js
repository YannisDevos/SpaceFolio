const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

nextBtn.addEventListener('click', () => {
    index = (index + 1) % document.querySelectorAll('.project-card').length;
    track.style.transform = `translateX(-${index * 100}%)`;
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + document.querySelectorAll('.project-card').length) % document.querySelectorAll('.project-card').length;
    track.style.transform = `translateX(-${index * 100}%)`;
});
