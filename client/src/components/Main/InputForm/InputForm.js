import './InputForm.scss';
import observer from '../../../models/observer';
import { accountController, cardController, userController } from '../../../controllers';
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
    this.setCards();
    return;
  }

  bindEvent() {
    const createAccountHandler = async () => {
      if (!this.radioInputParser()) return;
      this.selectInputValidator();
      this.dateInputParser();
      this.textInputParser();
      this.amountInputParser();
      this.monthInputParser();
      this.categoryInputParser();
      this.cardInputParser();
      console.log(this.accountData);
      await accountController.requestCreateAccount(this.accountData);
    };

    this.$target
      .querySelector('.select-type')
      .addEventListener('change', this.setCategories.bind(this));

    this.$target
      .querySelector('.submit-btn')
      .addEventListener('click', createAccountHandler);

    this.$target
      .querySelector('.delete-btn')
      .addEventListener('click', this.deleteInputHandler);

    this.$target
      .querySelector('.amount')
      .addEventListener('blur', this.printNumberWithCommas);

    this.$target
      .querySelector('.amount')
      .addEventListener('focus', this.deleteCommas);

    this.$target
      .querySelector('.amount')
      .addEventListener('keydown', this.amountInputValidator);

    this.$target
      .querySelector('.category')
      .addEventListener('click', this.categoryClickHandler);
  }

  dateInputParser() {
    const paymentDate = this.$target.querySelector('input[type=date]');
    this.accountData[paymentDate.name] = paymentDate.value;
  }

  amountInputParser() {
    const amount = this.$target.querySelector('.amount');
    amount.value.length
      ? (this.accountData[amount.name] = parseInt(
          amount.value.split(',').join('').slice(0, -1),
        ))
      : (this.accountData[amount.name] = 0);
  }

  textInputParser() {
    this.$target.querySelectorAll('input[type=text]').forEach($input => {
      this.accountData[$input.name] = $input.value;
    });
  }

  monthInputParser() {
    const paymentDate = this.$target.querySelector('input[type=date]');
    this.accountData.month = parseInt(paymentDate.value.substr(6, 1));
  }

  categoryInputParser() {
    const category = this.$target.querySelector('.category');
    const selectedOptionValue = category.options[category.selectedIndex].value;
    this.accountData.category = selectedOptionValue;
  }

  cardInputParser() {
    const card = this.$target.querySelector('.card');
    const selectedOptionValue = card.options[card.selectedIndex].value;
    this.accountData.cardId = cardController.getCards().find(card => card.name === selectedOptionValue).id;
  }

  radioInputParser() {
    const radioElems = this.$target.querySelectorAll('input[type=radio]');
    const radioChecked = [...radioElems].find(radio => radio.checked);
    if (radioChecked) {
      this.accountData[radioChecked.name] = radioChecked.value;
    } else {
      alert('수입/지출 항목을 체크해주세요');
    }
    return radioChecked;
  }

  setCategories() {
    const radioElems = this.$target.querySelectorAll('input[type=radio]');
    const radioChecked = [...radioElems].find(val => val.checked);
    const category = document.querySelector('.category');
    const incomeCategories = `
      <option selected disabled hidden>선택하세요</option>  
      <option value="salary">월급</option>  
      <option value="pocket">용돈</option>  
      <option value="extra">기타수입</option>  
    `;
    const expenseCategories = `
      <option selected disabled hidden>선택하세요</option>
      <option value="food">식비</option>
      <option value="living">생활</option>
      <option value="shopping">쇼핑/뷰티</option>
      <option value="transportation">교통</option>
      <option value="health">의료/건강</option>
      <option value="culture">문화/여가</option>
      <option value="unclassified">미분류</option>
    `;

    radioChecked.className === 'income'
      ? (category.innerHTML = incomeCategories)
      : (category.innerHTML = expenseCategories);
  }

  selectInputValidator() {
    let countUnSelected = 0;
    this.$target.querySelectorAll('select').forEach($elem => {
      if ($elem.children[0].selected) {
        countUnSelected++;
      }
    });
    if (countUnSelected) alert('선택항목을 입력하세요');
  }

  amountInputValidator(e) {
    e.target.value = e.target.value.replace(/[^0-9]/ ,'');
    e.target.value = e.target.value.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/ ,'');
    
  }  

  printNumberWithCommas(e) {
    e.target.value =
      e.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
  }

  deleteCommas(e) {
    e.target.value = e.target.value.split(',').join('').slice(0, -1);
  }

  categoryClickHandler(e) {
    if (e.target.children.length === 1) alert('수입/지출 항목을 체크해주세요');
  }

  async setCards() {
    const card = document.querySelector('.card');
    let options = '<option selected disabled hidden>선택하세요</option>';
    cardController.getCards().forEach(card => {
      options += `<option>${card.name}</option>`;
    });
    card.innerHTML = options;
  }

  deleteInputHandler() {
    const amountInput = document.querySelector('.amount');
    const contentInput = document.querySelector('.content');

    amountInput.value = '';
    contentInput.value = '';

    const radioElems = document.querySelectorAll('input[type=radio]');
    const radioChecked = [...radioElems].find(val => val.checked);
    if (radioChecked) radioChecked.checked = false;

    const date = document.querySelector('.date');
    date.value = '1989-04-18';

    document.querySelector('.category').innerHTML =
      '<option selected disabled hidden>선택하세요</option>';
    document.querySelector('.card').childNodes[0].selected = true;
  }
}
