import './JoinModal.scss';
import joinModalTemplate from './template';

export default class JoinModal {
  constructor($children) {
    this.$target = document.querySelector('.modal');
    this.$target.innerHTML = joinModalTemplate;
    this.bindEvent();
  }

  bindEvent() {
    const onFocusoutHandler = e => {};
    this.$target.addEventListener('focusout', onFocusoutHandler);
  }
}
