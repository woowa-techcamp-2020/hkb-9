import './JoinModal.scss';
import joinModalTemplate from './template';

export default class JoinModal {
  constructor($children) {
    const $target = document.querySelector('.modal');
    $target.innerHTML = joinModalTemplate;
  }
}
