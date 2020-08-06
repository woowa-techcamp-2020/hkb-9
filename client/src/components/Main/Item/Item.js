import './Item.scss';
import { ItemContent } from './../ItemContent';
import itemTemplate from './template';

export default class Item {
  constructor({ account, date }) {
    this.$target = document.querySelector(`#date-${date}`);
    this.init();
  }

  init() {
    this.$target.innerHTML = itemTemplate;
    new ItemContent();
  }
}
