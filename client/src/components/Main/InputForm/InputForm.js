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
  typeError: '분류를 선택해주세요',
  categoryError: '카테고리를 선택해주세요.',
  cardError: '결제수단을 선택해주세요.',
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
    this.isTypeSelected = false;
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
    this.$typeWarningMsg = this.$target.querySelector('.warn-type');
    this.$categoryWarningMsg = this.$target.querySelector('.warn-category');
    this.$cardWarningMsg = this.$target.querySelector('.warn-card');
    this.$amountWarningMsg = this.$target.querySelector('.warn-amount');
    this.$contentWarningMsg = this.$target.querySelector('.warn-content');
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
      this.$typeWarningMsg.style.display = 'none';
      this.$categoryWarningMsg.style.display = 'none';
      this.$cardWarningMsg.style.display = 'none';
      this.$amountWarningMsg.style.display = 'none';
      this.$contentWarningMsg.style.display = 'none';
    };

    const categoryClickHandler = () => {
      if (this.isTypeSelected) {
        this.$typeWarningMsg.style.display = 'none';
        this.$categoryWarningMsg.style.display = 'none';
        return;
      }
      this.$typeWarningMsg.innerHTML = messages.typeError;
      this.$typeWarningMsg.style.display = 'block';
    };

    const cardChangeHandler = () => {
      if (this.$cardInput.children[0].selected) {
        this.$cardWarningMsg.innerHTML = messages.cardError;
        this.$cardWarningMsg.style.display = 'block';
        return;
      }
      this.$cardWarningMsg.style.display = 'none';
    };

    const amountKeyDownHandler = () => {
      if (this.$amountInput) {
        this.$amountWarningMsg.style.display = 'none';
        return;
      }
      this.$amountWarningMsg.innerHTML = messages.amountError;
      this.$amountWarningMsg.style.display = 'block';
      return;
    };

    const createAccountHandler = async ({ target }) => {
      if (!this.radioInputParser()) {
        return;
      }

      if (!this.categoryInputValidator()) {
        return;
      }

      if (!this.cardInputValidator()) {
        return;
      }

      if (!this.amountInputValidator()) {
        return;
      }

      if (!this.contentInputValidator()) {
        return;
      }

      this.dateInputParser();
      this.textInputParser();
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
    this.$cardInput.addEventListener('change', cardChangeHandler);
    this.$amountInput.addEventListener('keydown', amountKeyDownHandler);
    this.$deleteButton.addEventListener('click', deleteInputHandler);
    this.$submitButton.addEventListener('click', createAccountHandler);
  }

  categoryInputValidator() {
    if (this.$category.children[0].selected) {
      this.$categoryWarningMsg.innerHTML = messages.categoryError;
      this.$categoryWarningMsg.style.display = 'block';
      return false;
    }
    return true;
  }

  cardInputValidator() {
    if (this.$cardInput.children[0].selected) {
      this.$cardWarningMsg.innerHTML = messages.cardError;
      this.$cardWarningMsg.style.display = 'block';
      return false;
    }
    return true;
  }

  amountInputValidator() {
    if (deleteCommas(this.$amountInput.value)) {
      this.$amountWarningMsg.style.display = 'none';
      return true;
    }
    this.$amountWarningMsg.innerHTML = messages.amountError;
    this.$amountWarningMsg.style.display = 'block';
    return false;
  }

  contentInputValidator() {
    if (this.$contentInput.value) {
      this.$contentWarningMsg.style.display = 'none';
      return true;
    }
    this.$contentWarningMsg.innerHTML = messages.contentError;
    this.$contentWarningMsg.style.display = 'block';
    return false;
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
    if (this.isTypeSelected) {
      this.$categoryWarningMsg.style.display = 'none';
      const { value } = this.$category;
      this.accountData.category = value;
      return;
    }
  }

  cardInputParser() {
    const { value } = this.$cardInput;
    this.accountData.cardId = value;
  }

  radioInputParser() {
    const $radioChecked = getCheckedRadioElement(this.$radioElements);
    if (!$radioChecked) {
      this.$typeWarningMsg.style.display = 'block';
      this.$typeWarningMsg.innerHTML = messages.typeError;
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
