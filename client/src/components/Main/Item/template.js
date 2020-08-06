import { html, printNumberWithCommas } from '../../../utils/functions';

export const itemTemplate = ({ month, date, income, expense, day }) => html`
  <div class="item-header">
    <span class="date">${month}월 ${date}일</span>
    <span class="day">${day}</span>
    <span class="date-income">+${printNumberWithCommas(income)}원</span>
    <span class="date-expense">-${printNumberWithCommas(expense)}원</span>
  </div>
  <div class="item-list" id="item-list-${date}"></div>
`;

export const itemContentTemplate = () => html`
  <div class="item-content-container">
    <span class="item-category">쇼핑/뷰티</span>
    <span class="item-content">미용실</span>
    <span class="item-card">현대카드</span>
    <span class="item-amount">2,000원</span>
  </div>
`; // date-id 설정하기
