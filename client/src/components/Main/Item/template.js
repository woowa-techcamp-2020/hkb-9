import { html, printNumberWithCommas } from '../../../utils/functions';

const itemTemplate = ({ month, date, income, expense, day }) => html`
  <div class="item-header">
    <span class="date">${month}월 ${date}일</span>
    <span class="day">${day}</span>
    <span class="date-income">+${printNumberWithCommas(income)}원</span>
    <span class="date-expense">-${printNumberWithCommas(expense)}원</span>
  </div>
  <div class="item-list"></div>
`;

export default itemTemplate;
