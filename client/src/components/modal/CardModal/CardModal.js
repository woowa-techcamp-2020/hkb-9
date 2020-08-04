import './CardModal.scss';
import cardModalTemplate from './template';

export default class CardModal {
  constructor({ onModalVisible }) {
    this.$target = document.querySelector('.modal');
    this.onModalVisible = onModalVisible;

    const $div = document.createElement('div');
    $div.innerHTML = cardModalTemplate;
    this.$target.appendChild($div);

    this.$cardModal = this.$target.querySelector('.card-modal');
    this.bindEvent();
  }

  render(visible) {
    if (visible) {
      this.$cardModal.classList.add('visible');
      return;
    }
    this.$cardModal.classList.remove('visible');
  }

  bindEvent() {}
}
