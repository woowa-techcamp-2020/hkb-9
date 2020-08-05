import observer from '../models/observer';
import Card from '../models/cardModel';

class CardController {
  setCards(cards) {
    observer.notify('cardChanged', cards);
  }

  async requestCreateCard(cardName) {
    const res = await Card.createCard(cardName);
    if (res.ok) {
      const cards = await res.json();
      this.sestCards(cards);
      return;
    }

    return res.status;
  }
}

export default new CardController();
