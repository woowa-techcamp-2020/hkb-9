import './CardList.scss';
import observer from '../../models/observer';
import cardItemTemplate from './template';

export default class CardList {
  constructor() {
    this.init();
  }

  init() {
    this.$target = document.querySelector('.card-list');
    observer.subscribe('cardChanged', this, this.render.bind(this));
  }

  render(cards) {
    this.$target.innerHTML = cards.map(card => cardItemTemplate(card)).join('');
  }
}
