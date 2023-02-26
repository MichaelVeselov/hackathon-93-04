import { Module } from '../core/module';
import { random, getRandomColor } from '../utils';

export class ShapesModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const windowHeight = document.body.clientHeight;
    const windowWidth = document.body.clientWidth;

    const minShapeSize = 50;
    const maxShapeHeight = windowHeight / 2;
    const maxShapeWidth = windowWidth / 2;
    const randomShapeHeight = random(minShapeSize, maxShapeHeight);
    const randomShapeWidth = random(minShapeSize, maxShapeWidth);

    const randomShapeHTML = document.createElement('div');
    randomShapeHTML.className = `shape-shapeitem`;
    randomShapeHTML.style.width = `${randomShapeWidth}px`;
    randomShapeHTML.style.height = `${randomShapeHeight}px`;
    randomShapeHTML.style.backgroundColor = getRandomColor();
    const top = random(0, windowHeight - randomShapeHeight);
    const left = random(0, windowWidth - randomShapeWidth);
    randomShapeHTML.style.top = `${top}px`;
    randomShapeHTML.style.left = `${left}px`;
    randomShapeHTML.style.borderRadius = `${random(0, 100)}%`;

    document.body.append(randomShapeHTML);

    setTimeout(() => {
      setTimeout(() => {
        randomShapeHTML.remove();
      }, 3 * 1000);
      randomShapeHTML.style.animation = `show 2s forwards`;
    }, 1 * 1000);
  }
}
