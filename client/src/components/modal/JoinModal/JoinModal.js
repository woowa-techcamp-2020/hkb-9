import './JoinModal.scss';
import joinModalTemplate from './template';
import apis from '../../../api/apis';
import { isEmpty } from '../../../utils/validation';

export default class JoinModal {
  constructor() {
    this.$target = document.querySelector('.modal');
    this.$target.innerHTML = joinModalTemplate;
    this.$inputs = this.$target.querySelectorAll('input');
    this.bindEvent();
  }

  validateInput() {
    const $errors = this.$target.querySelectorAll('.error');
    $errors.forEach($error => ($error.style.display = 'none')); // error 초기화

    let hasError = false;
    Array.from(this.$inputs).every($input => {
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
    const onSubmitHandler = async () => {
      const hasError = this.validateInput();
      if (hasError) {
        return;
      }
      try {
        const requestBody = {};
        this.$inputs.forEach($input => {
          requestBody[$input.name] = $input.value;
        });
        delete requestBody.passwordConfirm; // passwordConfirm은 필요 x
        await apis.createUser(requestBody);
        alert('success');
      } catch (e) {
        console.error(e);
      }
    }; // create user

    this.$target
      .querySelector('button')
      .addEventListener('click', onSubmitHandler);
  }
}
