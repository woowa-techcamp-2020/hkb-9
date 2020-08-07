/* eslint-disable no-undef */
import './Calendar.scss';
import { accountController } from '../../controllers';
import calendarTemplate from './template';

export default class Calendar {
  constructor() {
    this.init();
  }

  init() {
    this.date = new Date(accountController.get('currentDate'));
    this.accounts = accountController.get('monthlyAccounts');
    this.$target = document.querySelector('main');
    this.$target.innerHTML = calendarTemplate;
    this.$monthDays = document.querySelector(`.days`);
    accountController.subscribe('dateChanged', this, this.render.bind(this));

    this.render({ currentDate: this.date, accounts: this.accounts });
  }

  render({ currentDate, accounts }) {
    currentDate.setDate(1); // 현재 달을 1일로 초기화

    const firstDayIndex = currentDate.getDay();
    const lastDayIndex = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    ).getDay();

    const nextDayIndex = 7 - lastDayIndex - 1;

    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    ).getDate(); // 현재 달 마지막 날
    const previousLastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0,
    ).getDate(); // 이전 달 마지막 일

    const hasIncome = date => {
      const targetDate = accounts.get(date);
      if (targetDate && targetDate.income > 0) {
        return true;
      }
      return false;
    };

    const hasExpense = date => {
      const targetDate = accounts.get(date);
      if (targetDate && targetDate.expense > 0) {
        return true;
      }
      return false;
    };

    let days = '';
    for (let i = firstDayIndex; i > 0; i -= 1) {
      days += `<div class="prev-date">${previousLastDay - i + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i += 1) {
      if (
        currentDate.getFullYear() === new Date().getFullYear() &&
        currentDate.getMonth() === new Date().getMonth() &&
        i === new Date().getDate()
      ) {
        days += `<div class="today">${i}
        ${
          hasIncome(i)
            ? `<span class="income">+${accounts.get(i).income}</span>`
            : ''
        }
        ${
          hasExpense(i)
            ? `<span class="expense">-${accounts.get(i).expense}</span>`
            : ''
        }</div>`;
        continue;
      }

      if (
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          i,
        ).getDay() === 0
      ) {
        days += `
        <div class="red">
          ${i}
          ${
            hasIncome(i)
              ? `<span class="income">+${accounts.get(i).income}</span>`
              : ''
          }
          ${
            hasExpense(i)
              ? `<span class="expense">-${accounts.get(i).expense}</span>`
              : ''
          }
        </div>`;
        continue;
      }

      days += `
        <div>
          ${i}
          ${
            hasIncome(i)
              ? `<span class="income">+${accounts.get(i).income}</span>`
              : ''
          }
          ${
            hasExpense(i)
              ? `<span class="expense">-${accounts.get(i).expense}</span>`
              : ''
          }
        </div>   
        
      `;
    }

    for (let i = 1; i <= nextDayIndex; i += 1) {
      days += `<div class="next-date">${i}</div>`;
    }

    this.$monthDays.innerHTML = days;
  }
}
