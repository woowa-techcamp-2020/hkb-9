import './InputForm.scss';
import inputFormTemplate from './template';

export default class InputForm {
  constructor() {
    this.$target = document.querySelector('main');
    this.$inputForm = document.createElement('div');
    this.$inputForm.classList.add('input-form');
    this.$inputForm.innerHTML = inputFormTemplate;
    this.render();
  }

  render() {
    this.$target.appendChild(this.$inputForm);
  }
}
