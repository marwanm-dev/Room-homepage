// NOTE Importing Variables
import { heroContent, images } from './app.js';

export default class DisplayContent {
  constructor(title, imageUrl, content) {
    const desc = `
    <h1 class="title">${title}</h1>
      <p class="desc">
        ${content}
      </p> 
    <a href="#" class="cta">Shop now <img src="/images/icon-arrow.svg" /></a>`;
    const image = `<img class="desktop__image" src="${imageUrl}" />`;

    images.innerHTML += image;
    heroContent.innerHTML += desc;
  }
}
