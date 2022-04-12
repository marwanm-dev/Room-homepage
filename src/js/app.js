// NOTE Importing Class
import DisplayContent from './DisplayContent.js';
// NOTE Importing Fetched Content
import savedContent from './savedContent.js';

// NOTE Variables
const heroContent = document.querySelector('.hero__content');
const heroSlider = document.querySelector('.hero__slider');
const images = document.querySelector('.images');
const buttons = document.querySelectorAll('.button button');

// NOTE Flags
let mql1, readyToAddMobileMenu, currSliderIndex, slider, content;

// NOTE Functions
function displayNav(nav) {
  const desktopNav = document.querySelector('.desktop__nav');
  const mobileNav = document.querySelector('.mobile__nav');
  if (nav == 'mobile') {
    mobileNav.style.display = 'flex';
    desktopNav.style.display = 'none';
    const iconOpen = document.querySelector('.open');
    const iconClose = document.querySelector('.close');
    iconOpen.addEventListener('click', () => {
      iconOpen.style.display = 'none';
      iconClose.style.display = 'initial';
      mobileNav.classList.add('opened');
    });
    iconClose.addEventListener('click', () => {
      iconClose.style.display = 'none';
      iconOpen.style.display = 'initial';
      mobileNav.classList.remove('opened');
    });
  } else {
    desktopNav.style.display = 'flex';
    mobileNav.style.display = 'none';
  }
}
function createNewContent(index) {
  slider = savedContent[index]; // ANCHOR 0 indexed
  content = new DisplayContent(slider.title, slider.imageUrl, slider.content);
}
function removeContent() {
  images.querySelector('img').remove();
  heroContent.innerHTML = '';
}

// NOTE EventListener (Resize ==> Navigation)
window.addEventListener('resize', () => {
  mql1 = window.matchMedia('(max-width: 600px)');
  readyToAddMobileMenu = mql1.matches ? true : false;

  if (readyToAddMobileMenu) {
    displayNav('mobile');
  } else {
    displayNav('desktop');
  }
});
buttons.forEach(button => {
  button.addEventListener('click', e => {
    e.stopImmediatePropagation(); // NOTE Important!
    removeContent();

    if (button.classList.contains('right')) {
      if (currSliderIndex == 2) {
        currSliderIndex = -1;
      }
      currSliderIndex++;
      createNewContent(currSliderIndex);
    } else {
      if (currSliderIndex == 0) {
        currSliderIndex = savedContent.length;
      }
      currSliderIndex--;
      createNewContent(currSliderIndex);
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    heroContent.style.display = 'initial';
    heroSlider.style.display = 'initial';
    document.querySelector('.preview').style.display = 'flex';
    document.querySelector('.button').style.display = 'flex';
    setTimeout(() => {
      setTimeout(() => {
        heroContent.style.transform = 'translate(0,0)';
        heroContent.style.opacity = 1;
        setTimeout(() => {
          heroSlider.style.transform = 'translate(0,0)';
          heroSlider.style.opacity = 1;
          setTimeout(() => {
            document.querySelector('.preview').style.transform = 'translate(0,0)';
            document.querySelector('.preview').style.opacity = 1;
            setTimeout(() => {
              document.querySelector('.button').style.transform = 'translate(0,0)';
              document.querySelector('.button').style.opacity = 1;
            }, 100);
          }, 150);
        }, 150);
      }, 200);
    }, 550);
  }, 750);
});
currSliderIndex = 0;
createNewContent(currSliderIndex);

export { heroContent, heroSlider, images };
