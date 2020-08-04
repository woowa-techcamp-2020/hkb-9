import observer from '../models/observer';

class ModalController {
  constructor() {
    this.observer = observer;
  }

  onModalVisible(modalName, isShow) {
    this.observer.notify(modalName, isShow);
  }
}

export default new ModalController();
