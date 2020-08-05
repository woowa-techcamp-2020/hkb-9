import './InputForm.scss';
import observer from '../../../models/observer';
import { accountController } from '../../../controllers';
import inputFormTemplate from './template';

export default class InputForm {
  constructor() {
    this.$target = document.querySelector('.input-form-container');
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    this.$target.innerHTML = inputFormTemplate;
    this.bindEvent();
    return;
  }

  bindEvent() {
    const createAccountHandler = async() => {
      const accountData = {};
      this.$target.querySelectorAll('input').forEach($input => {
        accountData[$input.name] = $input.value;
        // console.log(accountData);
        // console.log($input.options[$input.selectedIndex].value)
      });
      this.$target.querySelectorAll('select').forEach($input => {
        console.log($input.name)
        const optionValue = $input.options[$input.selectedIndex].value;
        $input.name === 'card' ? accountData[$input.name] = parseInt(optionValue) : accountData[$input.name] = optionValue;
      })
      console.log(accountData)
      console.log(accountController)
      accountController.requestCreateAccount(accountData);
    }


    this.$target
      .querySelector('.submit-btn')
      .addEventListener('click', createAccountHandler);
  }
}
