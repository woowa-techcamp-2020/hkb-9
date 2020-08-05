import './InputForm.scss';
import observer from '../../../models/observer';
import { accountController } from '../../../controllers';
import inputFormTemplate from './template';

export default class InputForm {
  constructor() {
    this.$target = document.querySelector('.input-form-container');
    this.init();
    this.accountData = {};
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
    const createAccountHandler = async () => {
      this.radioInputParser();
      this.dateInputParser();
      this.textInputParser();
      this.numberInputParser();
      this.selectInputValidator();
      this.selectInputParser();
      console.log(this.accountData);
      await accountController.requestCreateAccount(this.accountData);
    };

    this.$target
      .querySelector('.select-type')
      .addEventListener('change', this.setCategories.bind(this));

    this.$target
      .querySelector('.submit-btn')
      .addEventListener('click', createAccountHandler);
  }
  dateInputParser() {
    const paymentDate = this.$target.querySelector('input[type=date]');
    this.accountData[paymentDate.name] = paymentDate.value;
  }

  numberInputParser() {
    this.$target.querySelectorAll('input[type=number]').forEach($input => {
      this.accountData[$input.name] = $input.value;
    });
  }

  textInputParser() {
    this.$target.querySelectorAll('input[type=text]').forEach($input => {
      this.accountData[$input.name] = $input.value;
    });
  }

  selectInputParser() {
    this.$target.querySelectorAll('input[type=select]').forEach($input => {
      const optionValue = $input.options[$input.selectedIndex].value;
      $input.name === 'cardId'
        ? (this.accountData[$input.name] = parseInt(optionValue))
        : (this.accountData[$input.name] = optionValue);
    });
  }

  radioInputParser() {
    const radioElems = this.$target.querySelectorAll('input[type=radio]');
    const radioChecked = [...radioElems].find(val => val.checked);
    if (!radioChecked) {
      alert('수입/지출 항목을 체크해주세요');
    }
    this.accountData[radioChecked.name] = radioChecked.value;
  }

  setCategories() {
    const radioElems = this.$target.querySelectorAll('input[type=radio]');
    const radioChecked = [...radioElems].find(val => val.checked);
    const category = document.querySelector('.category');
    const incomeCategories = `
      <option selected disabled hidden>선택하세요</option>  
      <option>월급</option>  
      <option>용돈</option>  
      <option>기타수입</option>  
    `;
    const expenseCategories = `
      <option selected disabled hidden>선택하세요</option>
      <option>식비</option>
      <option>생활</option>
      <option>쇼핑/뷰티</option>
      <option>교통</option>
      <option>의료/건강</option>
      <option>문화/여가</option>
      <option>미분류</option>
    `;

    radioChecked.className === 'income'
      ? (category.innerHTML = incomeCategories)
      : (category.innerHTML = expenseCategories);
  }

  selectInputValidator() {
    let countUnSelected = 0;
    this.$target.querySelectorAll('select')
    .forEach($elem => {
      if($elem.children[0].selected) {
        countUnSelected++;
      }
    })
    if(countUnSelected) alert('선택항목을 입력하세요')
  }
}
