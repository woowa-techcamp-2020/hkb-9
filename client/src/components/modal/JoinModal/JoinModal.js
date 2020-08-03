import './JoinModal.scss';
import joinModalTemplate from './template';
import { isEmpty } from '../../../utils/validation';

export default class JoinModal {
  constructor($children) {
    this.$target = document.querySelector('.modal');
    this.$target.innerHTML = joinModalTemplate;
    this.bindEvent();
  }

  validateInput() {
    const $inputs = this.$target.querySelectorAll('input');
    const $errors = this.$target.querySelectorAll('.error');
    $errors.forEach($error => ($error.style.display = 'none'));

    let hasError = false;
    Array.from($inputs).every($input => {
      if (isEmpty($input.value)) {
        const $error = $input.nextElementSibling;
        $error.style.display = 'block';
        hasError = true;
        return false;
      }
      return true;
    });

    return hasError;
  }

  bindEvent() {
    const onSubmitHandler = e => {
      this.validateInput();
    };

    this.$target
      .querySelector('button')
      .addEventListener('click', onSubmitHandler);
  }
}
