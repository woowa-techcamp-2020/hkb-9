import './InputForm.scss';
import { accountController, cardController } from '../../../controllers';
import {
  inputFormTemplate,
  incomeCategoryTemplate,
  expenseCategoryTemplate,
  initCardOptionTemplate,
  cardOptionTemplate,
} from './template';

import { getCheckedRadioElement } from '../../../utils/validation';
import {
  printNumberWithCommas,
  deleteCommas,
  returnDateFormat,
} from '../../../utils/functions';
import { STATUS } from '../../../utils/constants';

const messages = {
  typeError: '입/지출 항목을 체크해주세요',
  selectError: '선택사항을 입력해주세요.',
  amountError: '금액을 입력해주세요.',
  contentError: '내용을 입력해주세요.',
};

export default class InputForm {
  constructor() {
    this.init();
    this.bindElement();
    this.bindEvent();
    this.setCardList();
  }

  init() {
    this.$target = document.querySelector('.input-form-container');
    this.$target.innerHTML = inputFormTemplate;
    this.isCategorySelected = false;
    this.accountData = {};
  }
  setEditMode(accountData) {
    const {
      id,
      amount,
      category,
      type,
      content,
      payment_date,
      payMethod,
      card_id,
    } = accountData;
    this.targetEditId = id; // 수정 삭제 위해 저장
    this.accountData = accountData;
    this.$radioElements.forEach($element => {
      if ($element.className === type) {
        $element.checked = true;
      }
    });
    this.setCategoryHandler();
    this.$amountInput.value = amount;
    this.$category.value = category;
    this.$contentInput.value = content;

    let targetIndex = 0;
    Array.from(this.$cardInput.options).forEach((option, index) => {
      if (Number(option.value) === card_id) {
        targetIndex = index;
      }
    });
    this.$cardInput.selectedIndex = targetIndex;

    this.$dateInput.value = returnDateFormat(payment_date);
    this.$deleteButton.classList.add('item-delete');
    this.$deleteButton.innerHTML = '삭제';
    this.$submitButton.classList.add('item-modify');
    this.$submitButton.innerHTML = '수정하기';
  }

  reset() {
    this.$deleteButton.classList.remove('item-delete');
    this.$deleteButton.innerHTML = '내용 지우기';
    this.$submitButton.classList.remove('item-modify');
    this.$submitButton.innerHTML = '확인';

    this.isCategorySelected = false;
    this.$amountInput.value = '';
    this.$contentInput.value = '';
    this.$dateInput.value = returnDateFormat(new Date());
    this.$category.innerHTML = initCardOptionTemplate;
    this.$cardInput.childNodes[0].selected = true;
    const $radioChecked = getCheckedRadioElement(this.$radioElements);
    if ($radioChecked) {
      $radioChecked.checked = false;
    }
  }

  bindElement() {
    this.$category = this.$target.querySelector('.category');
    this.$selectType = this.$target.querySelector('.select-type');
    this.$radioElements = this.$target.querySelectorAll('input[type=radio]');
    this.$textInputs = this.$target.querySelectorAll('input[type=text]');
    this.$selectElements = this.$target.querySelectorAll('select');
    this.$dateInput = this.$target.querySelector('input[type=date]');
    this.$amountInput = this.$target.querySelector('.amount');
    this.$cardInput = this.$target.querySelector('.card');
    this.$contentInput = this.$target.querySelector('.content');

    this.$deleteButton = this.$target.querySelector('.delete-btn');
    this.$submitButton = this.$target.querySelector('.submit-btn');
    accountController.subscribe(
      'isEditMode',
      this,
      this.setEditMode.bind(this),
    );
  }

  setCategoryHandler() {
    this.isCategorySelected = true;
    const $radioChecked = getCheckedRadioElement(this.$radioElements);
    if ($radioChecked.className === 'income') {
      this.$category.innerHTML = incomeCategoryTemplate;
      return;
    }
    this.$category.innerHTML = expenseCategoryTemplate;
  }

  bindEvent() {
    const changeWithCommaHandler = ({ target }) =>
      (target.value = printNumberWithCommas(target.value) + '원');

    const deleteCommaHandler = ({ target }) =>
      (target.value = deleteCommas(target.value));

    const changeStringToNumberHanlder = ({ target }) => {
      target.value = target.value.replace(/[^0-9]+/g, '');
    };

    const deleteInputHandler = async ({ target }) => {
      if (target.classList.contains('item-delete')) {
        const status = await accountController.requestDeleteAccount(
          this.targetEditId,
        );
        if (status !== STATUS.SUCCESS) {
          alert('삭제 실패');
        }
        this.reset();
      }
    };

    const categoryClickHandler = () => {
      if (this.isCategorySelected) {
        return;
      }
      alert(messages.typeError);
    };

    const createAccountHandler = async ({ target }) => {
      if (!this.radioInputParser()) {
        return;
      }

      if (!this.selectInputValidator()) {
        return;
      }

      if (!deleteCommas(this.$amountInput.value)) {
        alert(messages.amountError);
        return;
      }

      if (!this.$contentInput.value) {
        alert(messages.contentError);
        return;
      }

      this.dateInputParser();
      this.textInputParser();
      this.amountInputParser();
      this.monthInputParser();
      this.categoryInputParser();
      this.cardInputParser();

      if (target.classList.contains('item-modify')) {
        const status = await accountController.requestModifyAccount(
          this.accountData,
        );
        if (status != STATUS.SUCCESS) {
          alert('수정 실패');
        }
        this.reset();

        return;
      } // modify
      const status = await accountController.requestCreateAccount(
        this.accountData,
      );
      if (status !== STATUS.CREATE_SUCCESS) {
        alert('생성 실패');
      }
    };

    this.$selectType.addEventListener(
      'change',
      this.setCategoryHandler.bind(this),
    );
    this.$amountInput.addEventListener('blur', changeWithCommaHandler);
    this.$amountInput.addEventListener('focus', deleteCommaHandler);
    this.$amountInput.addEventListener('change', changeStringToNumberHanlder);
    this.$category.addEventListener('click', categoryClickHandler);
    this.$deleteButton.addEventListener('click', deleteInputHandler);
    this.$submitButton.addEventListener('click', createAccountHandler);
  }

  selectInputValidator() {
    let isValidate = true;
    Array.from(this.$selectElements).forEach($elemment => {
      if ($elemment.children[0].selected) {
        isValidate = false;
        return true;
      }
    });
    if (!isValidate) {
      alert(messages.selectError);
    }
    return isValidate;
  }

  dateInputParser() {
    const { name, value } = this.$dateInput;
    this.accountData[name] = value;
  }

  monthInputParser() {
    const { value } = this.$dateInput;
    this.accountData.month = parseInt(value.substr(6, 1));
  } // month만 필요하니까

  amountInputParser() {
    const { name, value } = this.$amountInput;
    if (value.length) {
      this.accountData[name] = parseInt(deleteCommas(value));
      return;
    }
    this.accountData[name] = 0;
    return deleteCommas(value);
  }

  textInputParser() {
    this.$textInputs.forEach(
      $input => (this.accountData[$input.name] = $input.value),
    );
  }

  categoryInputParser() {
    const { value } = this.$category;
    this.accountData.category = value;
  }

  cardInputParser() {
    const { value } = this.$cardInput;
    this.accountData.cardId = value;
  }

  radioInputParser() {
    const $radioChecked = getCheckedRadioElement(this.$radioElements);
    if (!$radioChecked) {
      alert(messages.typeError);
      return;
    }
    this.accountData[$radioChecked.name] = $radioChecked.value;
    return true;
  }

  setCardList() {
    this.$cardInput.innerHTML = cardController
      .getCards()
      .reduce((acc, { id, name }) => {
        return acc + cardOptionTemplate(id, name);
      }, initCardOptionTemplate);
  }
}
