import * as cardApis from '../api/cardApis';

class CardModel {
  constructor() {
    this.cards = [];
  }

  set(nextCards) {
    console.log(nextCards);
    this.cards = nextCards.slice();
  }

  async createCard(cardName) {
    return await cardApis.create(cardName);
  }

  async getCards() {
    return await cardApis.getAll();
  }
}

export default new CardModel();
