import './SelectMonth.scss';
import HTMLTemplate from './template';
export default class SelectMonth {
  constructor() {
    this.$target = document.querySelector(`.select-month`);
    this.month = new Date().getMonth();
    this.render();
    this.bindEvent();
  }

  render() {
    this.$target.innerHTML = HTMLTemplate(this.month);
  };

  bindEvent() {
    this.$target.addEventListener('click', (e) => {
      if (e.target.classList.contains('prev')) {
        this.month = this.month - 1 === 0 ? 12 : this.month - 1;
        this.render();
        // onClickButton('prev');
        return;
      }

      if (e.target.classList.contains('next')) {
        this.month = this.month + 1 === 13 ? 1 : this.month + 1;
        this.render();

        // onClickButton('next');
      }
    });
  };
}
