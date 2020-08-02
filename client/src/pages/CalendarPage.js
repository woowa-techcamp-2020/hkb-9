import { Calendar } from '../components/Calendar'

export default class CalendarPage {
  constructor() {
    this.$target = document.querySelector('main')
    this.$target.innerHTML = 'calendar page'

    new Calendar()
  }
}