import { Calendar } from '../components/Calendar';

export default class CalendarPage {
  constructor() {
    this.$target = document.querySelector('main');

    new Calendar();
  }
}
