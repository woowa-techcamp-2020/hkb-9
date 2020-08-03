import './InputForm.scss';
import inputFormTemplate from './template';

export default class InputForm {
  constructor() {
    this.$target = document.querySelector('main');
    this.$target.innerHTML = inputFormTemplate;

    // this.$inputForm = document.createElement('div');
    // this.$inputForm.className = 'input-form';
    // this.render();
  }

  // render() {
  //   this.$target.appendChild(this.$inputForm);
  // }
}
