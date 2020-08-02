import './List';
import listTemplate from './template';

export default class List {
  constructor() {
    this.$target = document.querySelector('main');
    this.$list = document.createElement('div');
    this.$list.innerHTML = listTemplate;
    this.render();
  }
  render() {
    this.$target.appendChild(this.$list);
  }
}
