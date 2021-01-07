const logo = document.querySelector('.logo');
const tracker = document.querySelector('.track');
let navigationLinks = document.querySelectorAll('nav ul li a');
let nav = document.querySelector('nav');
const square = document.querySelectorAll('.square');
const monuntain1 = document.querySelector('#mountain1')
const monuntain2 = document.querySelector('#mountain2')
const monuntain3 = document.querySelector('#mountain3')
const paragraph1 = document.querySelector('.paragraph1');
const contactBtn = document.querySelector('.contact__btn');
const paragraph = document.querySelector('.paragraph1');
const h1 = document.querySelector('.h1');




// article track scroll


document.addEventListener('scroll', () => {

      let value = scrollY - 1735;

      if (scrollY > 1725) {
            tracker.style.top = `${value}px`;

      } else if (scrollY > 2400) {
            value = 1400;
            tracker.style.top = `${value}px`;
      }
})

// navigation colors change on scroll 


document.addEventListener('scroll', () => {

      if (scrollY > 500) { //  && scrollY < 2500
            logo.setAttribute('src', './assets/white-bg.svg')
            navigationLinks.forEach(el => el.style.color = 'var(--pri-den-gray-100)')
            nav.style.backgroundColor = 'rgba(255,255,255, .7)';
            square.forEach(el => el.style.animation = 'slide-in .5s ease-in forwards');
      } else {
            logo.setAttribute('src', './assets/dark-bg.png')
            navigationLinks.forEach(el => el.style.color = 'white')
            nav.style.backgroundColor = 'transparent';
            tracker.style.position = `relative`;
            square.forEach(el => el.style.animation = 'slide-back .5s ease-in forwards');
      }
})

// animation on scroll footer

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



document.addEventListener('scroll', () => {

      if (scrollY > 2500) {
            paragraph1.classList.add('animate-paragraph1');
            contactBtn.classList.add('animate-contact');
      } else {
            paragraph1.classList.remove('animate-paragraph1');
            contactBtn.classList.remove('animate-contact');
      }
})

document.addEventListener('scroll', () => {

      if (scrollY > 2900) {
            logo.setAttribute('src', './assets/dark-bg.svg')
            navigationLinks.forEach(el => el.style.color = 'white')
            nav.style.backgroundColor = 'rgba(0,0,0, .7)';
            nav.style.transition = '.5s';
      }
})