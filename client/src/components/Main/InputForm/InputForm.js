import './InputForm.scss';
import observer from '../../../models/observer';
import { accountController } from '../../../controllers';
import inputFormTemplate from './template';

export default class InputForm {
  constructor() {
    this.init();
  }

  init() {
    this.$target = document.querySelector('.input-form-container');
    this.render();
  }

  render() {
    this.$target.innerHTML = inputFormTemplate;
    return;
  }
}
