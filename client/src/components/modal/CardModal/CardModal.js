import './CardModal.scss';
import observer from '../../../models/observer';
import { userController, cardController } from '../../../controllers';
import cardModalTemplate from './template';
import { isEmpty } from '../../../utils/functions';
import { STATUS } from '../../../utils/constants';
import { CardList } from '../../CardList';

export default class CardModal {
  constructor() {
    this.init();
  }

  init() {
    this.$target = document.querySelector('.modal');
    observer.subscribe('cardModalVisible', this, this.render.bind(this));
  }

  render(visible) {
    if (visible) {
      this.$target.innerHTML = cardModalTemplate;
      this.bindEvent();
      new CardList();
      return;
    }
    this.$target.innerHTML = '';
  }

  bindEvent() {
    const onCloseModal = () =>
      userController.onModalVisible('cardModalVisible', false);

    const onCreateCard = async () => {
      const $input = this.$target.querySelector('.card-input');
      if (isEmpty($input.value)) {
        alert('등록하실 카드 이름을 입력해주세요^^');
        return;
      }
      const status = await cardController.requestCreateCard($input.value);
      if (status !== STATUS.CREATE_SUCCESS) {
        alert('카드 등록 실패..');
        return;
      }
      $input.value = ''; // input  초기화
    };

    this.$target
      .querySelector('.close-btn')
      .addEventListener('click', onCloseModal);
    this.$target
      .querySelector('.create-button')
      .addEventListener('click', onCreateCard);
  }
}
