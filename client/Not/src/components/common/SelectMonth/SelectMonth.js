import './index.scss';
import { selectMonthTemplate } from 'utils/template';
import { CLASS_NAME } from 'utils/constants';

export default function SelectMonth({ onClickButton }) {
  if (new.target !== SelectMonth) {
    return new SelectMonth();
  }

  this.init = () => {
    this.$target = document.querySelector(`.${CLASS_NAME.SELECT_MONTH}`);
    this.month = new Date().getMonth();
    this.render();
    this.bindEvent();
  };

  this.render = () => {
    this.$target.innerHTML = selectMonthTemplate(this.month);
  };

  this.bindEvent = () => {
    this.$target.addEventListener('click', (e) => {
      if (e.target.classList.contains(CLASS_NAME.SELECT_PREV)) {
        this.month = this.month - 1 === 0 ? 12 : this.month - 1;
        this.render();
        onClickButton('prev');
        return;
      }

      if (e.target.classList.contains(CLASS_NAME.SELECT_NEXT)) {
        this.month = this.month + 1 === 13 ? 1 : this.month + 1;
        this.render();

        onClickButton('next');
      }
    });
  };

  this.init();
}
