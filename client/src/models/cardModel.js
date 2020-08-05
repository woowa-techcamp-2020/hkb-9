import * as cardApis from '../api/cardApis';

class CardModel {
  constructor() {}

  async createCard(name) {
    return await cardApis.create(name);
  }
}

export default new CardModel();
