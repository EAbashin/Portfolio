const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu_close'),
    overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});


const counters = document.querySelectorAll('.using__skills_text_percent'),
    lines = document.querySelectorAll('.using__skills_bar_fill');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});