import { Module } from '../core/module';


export class VideoModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const container = document.createElement('div');
   container.className = 'container';
   container.style.width = '400px';
   container.style.height = '300px';
   container.style.position = 'relative';
   document.body.append(container);

   const deleteBtn = document.createElement('button');
   deleteBtn.textContent = 'Delete video';
   deleteBtn.type = 'submit';
   container.append(deleteBtn);
   deleteBtn.addEventListener('click', () => {
       deleteBtn.parentElement.remove();
   })

   const video = document.createElement('iframe');
   video.src = "https://www.youtube.com/embed/0bhFkRwjF-U";
   video.style.position = 'absolute'
   video.style.width = '100%';
   video.style.height = '100%';
   container.append(video);
   return container;
  }
}