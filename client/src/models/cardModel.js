import * as cardApis from '../api/cardApis';

class CardModel {
  constructor() {
    this.cards = [];
  }
  get() {
    return this.cards;
  }
  set(nextCards) {
    this.cards = nextCards.concat();
  }

  async createCard(cardName) {
    return await cardApis.create(cardName);
  }

  async getCards() {
    return await cardApis.getAll();
  }

  async deleteCard(id) {
    return await cardApis.deleteOne(id);
  }
}

export default new CardModel();
