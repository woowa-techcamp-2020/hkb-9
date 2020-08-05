import './List.scss';
import listTemplate from './template';
import { Item } from './../Item';

export default class List {
  constructor() {
    this.init();
  }

  init() {
    this.$target = document.querySelector('.list-container');
    this.render();
  }

  render() {
    this.$target.innerHTML = listTemplate;
    new Item();
    return;
  }
}
