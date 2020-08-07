import './Amount.scss';
import amountTemplate from './template';
import { accountController } from '../../controllers';

export default class Amount {
  constructor({ selector }) {
    this.selector = selector;
    this.init();
  }

  init() {
    this.$target = document.querySelector(this.selector);
    accountController.subscribe('amountChanged', this, this.render.bind(this));
    const income = accountController.get('monthlyIncome');
    const expense = accountController.get('monthlyExpense');
    this.render({ income, expense });
  }

  render({ income, expense }) {
    this.$target.innerHTML = amountTemplate(income, expense);
  }
}
