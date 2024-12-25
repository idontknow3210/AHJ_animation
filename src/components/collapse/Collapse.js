import './collapse.css';

// <div class="collapse">
//   <button class="collapse__button" type="button">Collapse</button>
//   <div class="collapse__content">
//     <p class="collapse__text">Lorem...</p>
//   </div>
// </div>
export default class Collapse {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('collapse');

    this.button = document.createElement('button');
    this.button.type = 'button';
    this.button.classList.add('collapse__button');
    this.button.textContent = 'Collapse';

    this.content = document.createElement('div');
    this.content.classList.add('collapse__content');

    this.text = document.createElement('p');
    this.text.classList.add('collapse__text');
    this.text.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio iusto voluptatem tenetur quaerat, porro iste quae necessitatibus natus architecto rem deleniti placeat minima dolores animi nulla voluptatum. Voluptatem, blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda delectus distinctio voluptates cum necessitatibus, quo magnam iste adipisci laboriosam molestiae quidem quisquam aspernatur expedita quas dicta ab labore tenetur tempore!';

    this.content.append(this.text);

    this.element.append(this.button, this.content);

    this.button.addEventListener('click', this.onClick.bind(this));
  }

  onClick() {
    this.content.classList.toggle('collapse__content_hide');
  }
}
