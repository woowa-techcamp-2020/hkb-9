import './JoinModal.scss';
import joinModalTemplate from './template';
import apis from '../../../api/apis';
import { isEmpty } from '../../../utils/validation';

export default class JoinModal {
  constructor({ onModalVisible }) {
    this.$target = document.querySelector('.modal');

    const $div = document.createElement('div');
    $div.innerHTML = joinModalTemplate;
    this.$target.appendChild($div);

    this.$joinModal = this.$target.querySelector('.join-modal');
    this.$inputs = this.$joinModal.querySelectorAll('input');
    this.onModalVisible = onModalVisible;
    this.bindEvent();
  }

  render(visible) {
    if (visible) {
      this.$joinModal.classList.add('visible');
      return;
    }

    this.$joinModal.classList.remove('visible');
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

      const requestBody = {};
      this.$inputs.forEach($input => {
        requestBody[$input.name] = $input.value;
      });
      delete requestBody.passwordConfirm; // passwordConfirm은 필요 x
      const res = await apis.createUser(requestBody);
      if (res.status === 409) {
        alert('중복된 아이디입니다.');
        return;
      }

      if (res.status !== 201) {
        alert('회원가입 실패');
        return;
      }
      alert('회원가입 성공 >_<');
      this.$inputs.forEach($input => ($input.value = '')); // input value 초기화
      onShowLoginModal(); // login on , join off
    }; // create user

    const onShowLoginModal = () => {
      this.onModalVisible('joinModal', false); // join modal off
      this.onModalVisible('loginModal', true); // login modal on
    };

    this.$target
      .querySelector('.join-nav')
      .addEventListener('click', onShowLoginModal);

    this.$target
      .querySelector('.join-button')
      .addEventListener('click', onSubmitHandler);
  }
}
