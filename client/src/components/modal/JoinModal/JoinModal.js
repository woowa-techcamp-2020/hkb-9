import './JoinModal.scss';
import joinModalTemplate from './template';
import apis from '../../../api/apis';
import { isEmpty } from '../../../utils/validation';

export default class JoinModal {
  constructor($children) {
    this.$target = document.querySelector('.modal');
    this.$target.innerHTML = joinModalTemplate;
    this.$inputs = this.$target.querySelectorAll('input');
    this.bindEvent();
  }

  validateInput() {
    const $errors = this.$target.querySelectorAll('.error');
    $errors.forEach($error => ($error.style.display = 'none'));

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
        await apis.createUser({});
      } catch (e) {
        console.error(e);
      }
    };

    this.$target
      .querySelector('button')
      .addEventListener('click', onSubmitHandler);
  }
}
