import './List.scss';
import listTemplate from './template';
import { Item } from './Item';

export default class List {
  constructor() {
    this.$target = document.querySelector('main');
    this.$list = document.createElement('div');
    this.$list.className = 'list-container';
    this.$list.innerHTML = listTemplate;
    this.render();
  }
  render() {
    this.$target.appendChild(this.$list);
    new Item();
  }
}
