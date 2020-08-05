import './CardModal.scss';
import observer from '../../../models/observer';
import cardModalTemplate from './template';

export default class CardModal {
  constructor() {
    this.init();
  }

  init() {
    this.$target = document.querySelector('.modal');
    observer.subscribe('cardModalVisible', this, this.render.bind(this));
    // observer.notify('cardModalVisible', true);
  }

  render(visible) {
    if (visible) {
      this.$target.innerHTML = cardModalTemplate;
      this.bindEvent();
      return;
    }
    this.$target.innerHTML = '';
  }

  bindEvent() {}
}
