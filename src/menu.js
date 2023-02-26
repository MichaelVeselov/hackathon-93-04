import { Menu } from './core/menu';
import { BackgroundModule } from './modules/background.module';
import { SoundModule } from './modules/sound.module';
import { VideoModule } from './modules/video.module';
import { ShapesModule } from './modules/shape.module';
import { MessageModule } from './modules/message.module';
import { ClicksModule } from './modules/clicks.module';

export class ContextMenu extends Menu {
  #menu;
  #scope;
  #modules;

  constructor(container, scope) {
    super(container);

    this.#menu = document.querySelector(container);
    this.#scope = document.querySelector(scope);

    this.#modules = {
      background: new BackgroundModule('background', 'change background color'),
      sound: new SoundModule('sound', 'play random sound'),
      video: new VideoModule('video', 'play video stream'),
      shape: new ShapesModule('shape', 'draw a shape'),
      message: new MessageModule('message', 'show new message'),
      clicks: new ClicksModule('clicks', 'start click counter'),
    };
  }

  #open() {
    this.#menu.classList.add('open');
  }

  close() {
    this.#menu.classList.remove('open');
  }

  #add(menuItem) {
    const li = document.createElement('li');
    li.innerHTML = menuItem.toHTML();
    this.#menu.append(li);
  }

  #normalizePozition(mouseX, mouseY) {
    let { left: scopeOffsetX, top: scopeOffsetY } = this.#scope.getBoundingClientRect();

    scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX;
    scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY;

    const scopeX = mouseX - scopeOffsetX;
    const scopeY = mouseY - scopeOffsetY;

    const outOfBoundsOnX = scopeX + this.#menu.clientWidth > this.#scope.clientWidth;

    const outOfBoundsOnY = scopeY + this.#menu.clientHeight > this.#scope.clientHeight;

    let normalizedX = mouseX;
    let normalizedY = mouseY;

    if (outOfBoundsOnX) {
      normalizedX = scopeOffsetX + this.#scope.clientWidth - this.#menu.clientWidth;
    }

    if (outOfBoundsOnY) {
      normalizedY = scopeOffsetY + this.#scope.clientHeight - this.#menu.clientHeight;
    }

    return { normalizedX, normalizedY };
  }

  render() {
    const menuModules = Object.values(this.#modules);

    menuModules.forEach((module) => {
      this.#add(module);
    });

    document.body.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      const { clientX: mouseX, clientY: mouseY } = event;
      const { normalizedX, normalizedY } = this.#normalizePozition(mouseX, mouseY);

      this.#menu.style.top = `${normalizedY}px`;
      this.#menu.style.left = `${normalizedX}px`;
      this.close();
      setTimeout(() => {
        this.#open();
      });
    });

    this.#menu.addEventListener('click', (event) => {
      event.preventDefault();

      for (let i = 0; i < this.#scope.childNodes.length; i++) {
        if (
          !this.#scope.childNodes[i].classList?.contains('menu') &&
          !this.#scope.childNodes[i].classList?.contains('menu-title')
        ) {
          this.#scope.childNodes[i].remove();
        }
      }
      const moduleType = event.target.getAttribute('data-type');
      this.#modules[moduleType].trigger();
      this.close();
    });
  }
}
