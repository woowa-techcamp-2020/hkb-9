import './Item.scss';
import { ItemContent } from './../ItemContent';
import { accountController } from '../../../controllers';
import itemTemplate from './template';

export default class Item {
  constructor({ account, date }) {
    this.$target = document.querySelector(`#date-${date}`);
    this.account = account;
    this.date = date;
    this.init();
  }

  init() {
    const month = accountController.get('currentMonth');
    const { day, income, expense, contents } = this.account;
    this.$target.innerHTML = itemTemplate({
      month,
      date: this.date,
      day,
      income,
      expense,
    });
    // new ItemContent();
  }
}
