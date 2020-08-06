import './List.scss';
import listTemplate from './template';
import { accountController } from '../../../controllers';
import { Item } from './../Item';
import { mapForIterator } from '../../../utils/functions';

export default class List {
  constructor() {
    this.init();
  }

  init() {
    this.$target = document.querySelector('.list-container');
    accountController.subscribe('accountChanged', this, this.render.bind(this));
    accountController.subscribe(
      'listTypeChanged',
      this,
      this.render.bind(this),
    );
    this.render(accountController.get('monthlyAccounts'));
  }

  render(accounts) {
    this.$target.innerHTML = mapForIterator(accounts, listTemplate).join('');
    for (const account of accounts) {
      new Item({ account, date: account[0] });
    }
  }
}
