import { Module } from '../core/module';
import { random } from '../utils';

export class MessageModule extends Module {
  #anecdotes;

  constructor(type, text) {
    super(type, text);
    this.#anecdotes = [
      `— Что думает блондинка, когда узнает, что беременна?
        – Ой, хоть бы не от меня!`,
      `Приходит ежиха к наркологу и говорит сквозь слезы:
        – Доктор, помогите! У меня муж колется!`,
      `Гаишники тормозят Нового Русского и проверяют документы.
        – Слышь, командир, давай быстрей, там за мной твои коллеги гоняться…`,
      `– Что такое 90–60–90?
        – Это проезд по городу мимо ГАИ (ГИБДД).`,
      `Объявление в многоэтажном доме:
        «Лифт не работает. Ближайший лифт в соседнем доме».`,
      `– Официант, в прошлое воскресенье у вас было свежее пиво!
        – Уверяю вас, это оно и есть.`,
    ];
  }
  trigger() {
    const anecdotMessage = this.#anecdotes[random(0, 5)];
    const div = document.createElement('div');
    div.className = 'message-popupmessage';
    div.textContent = anecdotMessage;
    document.body.append(div);
    setTimeout(() => {
      div.classList.add('message-hover');
    }, 7 * 1000);
  }
}
