/* eslint-disable no-new */
import { calendarPageTemplate } from 'utils/template';
import { Header } from '../components/common/Header';
import { SelectMonth } from '../components/common/SelectMonth';
import { PageFilter } from '../components/common/PageFilter';
import { Calendar } from '../components/Calendar';

export default function CalendarPage() {
  if (new.target !== CalendarPage) {
    return new CalendarPage();
  }

  this.init = () => {
    this.$target = document.querySelector('#App');
    this.$target.innerHTML = calendarPageTemplate;
    new Header();
    new SelectMonth({
      onClickButton: this.onClickButton,
    });
    new PageFilter();
    this.Calendar = new Calendar();
  };

  this.onClickButton = (type) => {
    this.Calendar.setState(type);
  };

  this.init();
}
