import { Module } from '../core/module';
import { random } from '../utils';

export class SoundModule extends Module {
  #sounds;
  #images;

  constructor(type, text) {
    super(type, text);
    this.#sounds = [
      'https://lesfm.net/wp-content/uploads/2023/02/Mountain-road.mp3',
      'https://lesfm.net/wp-content/uploads/2023/02/Sleep-my-love.mp3',
      'https://lesfm.net/wp-content/uploads/2023/02/Valentine.mp3',
      'https://lesfm.net/wp-content/uploads/2023/02/Pieces-of-Love.mp3',
      'https://lesfm.net/wp-content/uploads/2023/02/On-a-Date.mp3',
      'https://lesfm.net/wp-content/uploads/2023/02/Productivity.mp3',
      'https://lesfm.net/wp-content/uploads/2023/02/Miss-Summer.mp3',
      'https://lesfm.net/wp-content/uploads/2023/02/Time-for-Exercise.mp3',
      'https://lesfm.net/wp-content/uploads/2023/01/Strumming-on-the-guitar.mp3',
    ];
    this.#images = [
      'https://plus.unsplash.com/premium_photo-1664361480561-3bdcd6eb3b6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1497449493050-aad1e7cad165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    ];
  }

  trigger() {
    const audioContainer = document.createElement('div');
    audioContainer.classList.add('sound-audiocontainer');

    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('sound-imgwrapper');

    const img = document.createElement('img');
    img.src = this.#images[random(0, this.#images.length - 1)];
    imgWrapper.append(img);

    const audioPlayer = document.createElement('audio');
    audioPlayer.setAttribute('controls', true);
    audioPlayer.setAttribute('autoplay', true);
    audioPlayer.src = this.#sounds[random(0, this.#sounds.length - 1)];

    audioContainer.append(imgWrapper, audioPlayer);
    document.querySelector('body').append(audioContainer);
  }
}
