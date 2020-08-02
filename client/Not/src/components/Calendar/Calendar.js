/* eslint-disable no-undef */
import './index.scss';
import { TAG_NAME, CLASS_NAME } from 'utils/constants';
import { calendarTemplate } from 'utils/template';

export default function Calendar() {
  if (new.target !== Calendar) {
    return new Calendar();
  }

  this.init = () => {
    this.date = new Date();
    this.$target = document.querySelector(TAG_NAME.MAIN);
    this.$target.innerHTML = calendarTemplate;

    this.$monthDays = document.querySelector(`.${CLASS_NAME.CALENDAR_DAYS}`);
    this.render();
  };

  this.setState = (type) => {
    if (type === 'prev') {
      this.date.setMonth(this.date.getMonth() - 1);
      this.render();
      return;
    }

    this.date.setMonth(this.date.getMonth() + 1);
    this.render();
  };

  this.render = () => {
    this.date.setDate(1); // 현재 달을 1일로 초기화

    const firstDayIndex = this.date.getDay();
    const lastDayIndex = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0,
    ).getDay();

    const nextDayIndex = 7 - lastDayIndex - 1;

    const lastDay = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0,
    ).getDate(); // 현재 달 마지막 날
    const previousLastDay = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      0,
    ).getDate(); // 이전 달 마지막 일

    let days = '';
    for (let i = firstDayIndex; i > 0; i -= 1) {
      days += `<div class="prev-date">${previousLastDay - i + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i += 1) {
      if (
        this.date.getFullYear() === new Date().getFullYear()
        && this.date.getMonth() === new Date().getMonth()
        && i === new Date().getDate()
      ) {
        days += `<div class="today">${i}</div>`;
        continue;
      }

      if (new Date(
        this.date.getFullYear(),
        this.date.getMonth(),
        i,
      ).getDay() === 0) {
        days += `<div class="red">${i}</div>`;
        continue;
      }

      days += `<div>${i}</div>`;
    }

    for (let i = 1; i <= nextDayIndex; i += 1) {
      days += `<div class="next-date">${i}</div>`;
    }

    this.$monthDays.innerHTML = days;
  };

  this.init();
}
