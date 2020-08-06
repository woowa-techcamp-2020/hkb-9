import './List.scss';
import listTemplate from './template';
import { accountController } from '../../../controllers';
import { Item } from './../Item';

export default class List {
  constructor() {
    this.init();
  }

  init() {
    this.$target = document.querySelector('.list-container');
    accountController.subscribe('accountChanged', this, this.render.bind(this));
    this.render();
  }

  render(accounts) {
    this.$target.innerHTML = listTemplate;
    new Item();
  }
}
