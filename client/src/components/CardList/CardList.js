import './CardList.scss';
import observer from '../../models/observer';
import { cardController } from '../../controllers';
import cardItemTemplate from './template';
import { STATUS } from '../../utils/constants';

export default class CardList {
  constructor() {
    this.init();
    this.bindEvent();
  }

  init() {
    this.$target = document.querySelector('.card-list');
    observer.subscribe('cardChanged', this, this.render.bind(this));
    this.render(cardController.getCards());
  }

  render(cards) {
    this.$target.innerHTML = cards.map(card => cardItemTemplate(card)).join('');
  }

  bindEvent() {
    const onDeleteCard = async e => {
      if (!e.target.classList.contains('delete-btn')) {
        return;
      }
      const isDelete = confirm('정말 삭제하시겠습니깡?');
      if (!isDelete) {
        return;
      }
      const $li = e.target.closest('li');
      const { id } = $li.dataset; // html5 dataset => data-id
      const errorStatus = await cardController.requestDeleteCard(id);
      if (!errorStatus) {
        return;
      }
      alert('카드 삭제 실패...');
    };

    this.$target.addEventListener('click', onDeleteCard);
  }
}
