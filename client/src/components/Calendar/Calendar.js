/* eslint-disable no-undef */
import './Calendar.scss';
import calendarTemplate from './template';

export default class Calendar {
  constructor() {
    this.date = new Date();
    this.$target = document.querySelector('main');
    this.$target.innerHTML = calendarTemplate;

    this.$monthDays = document.querySelector(`.days`);
    this.render();
  }

  setState(type){
    if (type === 'prev') {
      this.date.setMonth(this.date.getMonth() - 1);
      this.render();
      return;
    }

    this.date.setMonth(this.date.getMonth() + 1);
    this.render();
  };

  render() {
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
        days += `
        <div class="red">
          ${i}
          <span class="income">+5000</span>
          <span class="expense">-3000</span>    
        </div>`;
        continue;
      }

      days += `
        <div>
          ${i}
          <span class="income">+5000</span>
          <span class="expense">-3000</span>    
        </div>   
        
      `;
    }

    for (let i = 1; i <= nextDayIndex; i += 1) {
      days += `<div class="next-date">${i}</div>`;
    }

    this.$monthDays.innerHTML = days;
  };
}
