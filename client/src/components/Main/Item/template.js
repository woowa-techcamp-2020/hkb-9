import {
  html,
  printNumberWithCommas,
  convertCategoryToKorean,
} from '../../../utils/functions';

export const itemTemplate = ({ month, date, income, expense, day }) => html`
  <div class="item-header">
    <span class="date">${month}월 ${date}일</span>
    <span class="day">${day}</span>
    <span class="date-income">+${printNumberWithCommas(income)}원</span>
    <span class="date-expense">-${printNumberWithCommas(expense)}원</span>
  </div>
  <div class="item-list" id="item-list-${date}"></div>
`;

export const itemContentTemplate = ({
  id,
  type,
  content,
  category,
  payMethod,
  amount,
}) => html`
  <div class="item-content-container" data-id=${id}>
    <span class="item-category ${type === 'expense' ? 'item-type-expense' : ''}"
      >${convertCategoryToKorean(category)}</span
    >
    <span class="item-content">${content}</span>
    <i class="f7-icons item-modify">pencil_circle_fill</i>
    <span class="item-card">${payMethod}</span>
    <span class="item-amount ${type === 'expense' ? 'item-color-expense' : ''}"
      >${(type === 'income' ? '+' : '-') +
      printNumberWithCommas(amount)}원</span
    >
  </div>
`; // date-id 설정하기
