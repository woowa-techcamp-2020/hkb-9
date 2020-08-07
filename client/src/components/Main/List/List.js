import './List.scss';
import listTemplate from './template';
import { accountController } from '../../../controllers';
import { Item } from './../Item';
import { mapForIterator } from '../../../utils/functions';

export default class List {
  constructor() {
    this.init();
    this.bindEvent();
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
    for (const [date, account] of accounts) {
      new Item({ date, account });
    }
  }

  bindEvent() {
    this.$target.addEventListener('click', ({ target }) => {
      if (target.classList.contains('item-modify')) {
        const $itemContainer = target.closest('.item-content-container');
        const { id } = $itemContainer.dataset;
        accountController.onClickModifyButton(Number(id));
      }
    });
  }
}
