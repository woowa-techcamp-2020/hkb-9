import './SelectMonth.scss';
import { accountController } from '../../../controllers';
import HTMLTemplate from './template';
export default class SelectMonth {
  constructor() {
    this.$target = document.querySelector(`.select-month`);
    this.init();
    this.bindEvent();
  }

  init() {
    this.$target = document.querySelector(`.select-month`);
    accountController.subscribe('monthChanged', this, this.render.bind(this));
    this.render(accountController.get('currentMonth'));
  }

  render(month) {
    const year = accountController.get('currentYear');
    this.$target.innerHTML = HTMLTemplate(year, month);
  }

  bindEvent() {
    this.$target.addEventListener('click', e => {
      if (e.target.classList.contains('prev')) {
        accountController.changeMonth('prev');
        return;
      }

      if (e.target.classList.contains('next')) {
        accountController.changeMonth('next');
      }
    });
  }
}
