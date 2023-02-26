import { Module } from '../core/module';
import { random } from '../utils';

export class BackgroundModule extends Module {
  #url;

  constructor(type, text) {
    super(type, text);
    this.#url = 'https://api.sampleapis.com/csscolornames/colors';
  }

  async #getColors() {
    try {
      const response = await fetch(this.#url);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  #showInfo(id, name, hex) {
    const div = document.createElement('div');
    div.classList.add('background-infocontainer');

    const idInfo = document.createElement('p');
    idInfo.textContent = id;

    const nameInfo = document.createElement('p');
    nameInfo.textContent = name;

    const hexInfo = document.createElement('p');
    hexInfo.textContent = hex;

    div.append(idInfo, nameInfo, hexInfo);

    document.body.append(div);
  }

  trigger() {
    this.#getColors().then((data) => {
      const rnd = random(0, data.length - 1);
      const { id, name, hex } = data[rnd];
      const newBackGroundColor = hex;
      document.body.style.backgroundColor = newBackGroundColor;
      this.#showInfo(id, name, hex);
    });
  }
}
