const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const sections = document.querySelectorAll('.hidden');
sections.forEach(section => observer.observe(section));

function goTop(){
    window.scrollTo(0,0);
}

window.onload = function () {
    goTop();
};

const homeBtn = document.querySelectorAll(".nav_link>a")[0];

homeBtn.addEventListener("click", event => {
    event.preventDefault();

    goTop();
})