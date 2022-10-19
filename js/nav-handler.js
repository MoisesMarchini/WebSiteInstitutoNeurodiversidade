const navToogle = document.querySelector('nav #check');
const nav = document.querySelector('nav');
let lastScroll;

window.addEventListener('scroll', () => {
    OnWindowScroll();
})

function OnWindowScroll() {
    if (window.scrollY <= lastScroll && !nav.classList.contains('snap'))
        nav.classList.add('snap');
    else if (window.scrollY > lastScroll)
        nav.classList.remove('snap');
    navToogle.checked = false;
    lastScroll = window.scrollY;
}