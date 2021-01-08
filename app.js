/* ***************************************************** */
/* ******* S T I C K Y  B O X  O N  S C R O L L  ******* */
/* ***************************************************** */



const tracker = document.querySelector('.track');



document.addEventListener('scroll', () => {

      let value = scrollY - 1850;


      if (scrollY > 1850) {
            tracker.style.top = `${value}px`;

      } else if (scrollY > 2400) {
            value = 1400;
            tracker.style.top = `${value}px`;
      }
})


/* ***************************************************** */
/* ** L O G O  B A C K G R O U N D   O N  S C R O L L ** */
/* ***************************************************** */


let navigationLinks = document.querySelectorAll('nav ul li a');
let nav = document.querySelector('nav');
const logo = document.querySelector('.logo');



document.addEventListener('scroll', () => {

      if (scrollY > 500) { //  && scrollY < 2500
            logo.setAttribute('src', './assets/white-bg.svg')
            navigationLinks.forEach(el => el.style.color = 'var(--pri-den-gray-100)')
            nav.style.backgroundColor = 'rgba(255,255,255, .7)';
      } else {
            logo.setAttribute('src', './assets/dark-bg.png')
            navigationLinks.forEach(el => el.style.color = 'white')
            nav.style.backgroundColor = 'transparent';
            tracker.style.position = `relative`;
      }
})

document.addEventListener('scroll', () => {

      if (scrollY > 3300) {
            logo.setAttribute('src', './assets/dark-bg.svg')
            navigationLinks.forEach(el => el.style.color = 'white')
            nav.style.backgroundColor = 'rgba(0,0,0, .7)';
            nav.style.transition = '.5s';
      }
})

/* ***************************************************** */
/* ********** A N I M A T I N G  F O O T E R ******** ** */
/* ***************************************************** */

const monuntain1 = document.querySelector('#mountain1')
const monuntain2 = document.querySelector('#mountain2')
const monuntain3 = document.querySelector('#mountain3')


document.addEventListener('scroll', () => {
      if (scrollY > 2700) {
            monuntain1.classList.add('mountain1-animation');
            monuntain2.classList.add('mountain2-animation');
            monuntain3.classList.add('mountain3-animation');
      } else {
            monuntain1.classList.remove('mountain1-animation');
            monuntain2.classList.remove('mountain2-animation');
            monuntain3.classList.remove('mountain3-animation');
      }
})


/* ***************************************************** */
/* ** A N I M A T I N G  C A R D  B A C K G R O U N D ** */
/* ***************************************************** */


const test = document.querySelectorAll('#phase1');
const test1 = document.querySelectorAll('#phase2');
const test2 = document.querySelectorAll('#phase3');
const test3 = document.querySelectorAll('#phase4');
const test4 = document.querySelectorAll('#phase5');



document.addEventListener('scroll', () => {

      if (scrollY > 1600 && scrollY < 2000) {
            test.forEach(el => el.style.animation = 'slide-in .2s ease-in forwards');
      } else {
            test.forEach(el => el.style.animation = 'slide-back .2s ease-in forwards');
      }
})
document.addEventListener('scroll', () => {

      if (scrollY > 1650 && scrollY < 2200) {
            test1.forEach(el => el.style.animation = 'slide-in .2s ease-in forwards');
      } else {
            test1.forEach(el => el.style.animation = 'slide-back .2s ease-in forwards');
      }
})
document.addEventListener('scroll', () => {

      if (scrollY > 2100 && scrollY < 2800) {
            test2.forEach(el => el.style.animation = 'slide-in .2s ease-in forwards');
      } else {
            test2.forEach(el => el.style.animation = 'slide-back .2s ease-in forwards');
      }
})
document.addEventListener('scroll', () => {

      if (scrollY > 2550 && scrollY < 2800) {
            test3.forEach(el => el.style.animation = 'slide-in .2s ease-in forwards');
      } else {
            test3.forEach(el => el.style.animation = 'slide-back .2s ease-in forwards');
      }
})
document.addEventListener('scroll', () => {

      if (scrollY > 2800) {
            test4.forEach(el => el.style.animation = 'slide-in .2s ease-in forwards');
      } else {
            test4.forEach(el => el.style.animation = 'slide-back .2s ease-in forwards');
      }

})

/* ***************************************************** */
/* ********** A N I M A T I N G   T E X T S ************ */
/* ***************************************************** */

const paragraph1 = document.querySelector('.paragraph1');
const contactBtn = document.querySelector('.contact__btn');
const paragraph = document.querySelector('.paragraph');
const h1 = document.querySelector('.h1');



document.addEventListener('scroll', () => {

      if (scrollY > 1100 && scrollY < 1800) {
            paragraph.style.animation = 'from-bottom .3s ease-in forwards'
            paragraph.style.animationDelay = '.5s';
      } else {
            paragraph.style.animation = 'to-bottom .3s ease-in forwards'
            paragraph.style.animationDelay = '.5s';
      }

})

document.addEventListener('scroll', () => {

      if (scrollY > 1100 && scrollY < 1800) {
            h1.style.animation = 'from-right .3s ease-in forwards'
      } else {
            h1.style.animation = 'to-right .3s ease-in forwards'
      }

})

document.addEventListener('scroll', () => {

      if (scrollY > 2500) {
            paragraph1.classList.add('animate-paragraph1');
            contactBtn.classList.add('animate-contact');
      } else {
            paragraph1.classList.remove('animate-paragraph1');
            contactBtn.classList.remove('animate-contact');
      }
})