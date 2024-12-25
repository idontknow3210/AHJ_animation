import Collapse from '../components/collapse/Collapse';

export default class App {
  constructor() {
    this.collapse = new Collapse();
  }

  init() {
    this.render();
  }

  render() {
    const container = document.querySelector('.container');
    container.append(this.collapse.element);
  }
}
