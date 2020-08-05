import observer from '../models/observer';
import Card from '../models/cardModel';

class CardController {
  setCards(cards) {
    observer.notify('cardChanged', cards);
  }

  async requestCreateCard(cardName) {
    const res = await Card.createCard(cardName);
    if (res.ok) {
      const { cards } = await res.json();
      Card.set(cards);
      this.setCards(cards);
    }

    return res.status;
  }

  async requestGetCards() {
    const res = await Card.getCards();
    if (res.ok) {
      const { cards } = await res.json();
      Card.set(cards);
      this.setCards(cards);
      return;
    }

    return res.status;
  }
}

export default new CardController();
