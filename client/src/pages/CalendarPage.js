// import { calendarPageTemplate } from '../../utils/template';
import { Calendar } from '../components/Calendar';

export default function CalendarPage() {
  if (new.target !== CalendarPage) {
    return new CalendarPage();
  }

  this.init = () => {
    this.Calendar = new Calendar();
  };

  this.init();
}
