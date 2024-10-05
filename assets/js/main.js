/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    header.classList.toggle('scroll-header', window.scrollY >= 100);
}

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (window.scrollY >= 200) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
           .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        const navLink = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const storedTheme = localStorage.getItem('selected-theme')
const storedIcon = localStorage.getItem('selected-icon')

const getThemeState = () => ({
  theme: document.body.classList.contains(darkTheme) ? 'dark' : 'light',
  icon: themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
})

if (storedTheme) {
  document.body.classList.toggle(darkTheme, storedTheme === 'dark')
  themeButton.classList.toggle(iconTheme, storedIcon === 'ri-moon-line')
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  const { theme, icon } = getThemeState()
  localStorage.setItem('selected-theme', theme)
  localStorage.setItem('selected-icon', icon)
})

