import { html, printNumberWithCommas } from '../../utils/functions';

const amountTemplate = (income, expense) => html`
  <form class="amount-form">
    <div class="income">
      <input type="checkbox" id="checkbox-income" name="type" />
      <label class="income-label" for="checkbox-income">수입</label>
      <span class="wrap"><span class="total-income">${printNumberWithCommas(income)}원</span></span>
    </div>
    <div class="expense">
      <input type="checkbox" id="checkbox-expense" name="type" />
      <label class="expense-label" for="checkbox-expense">지출</label>
      <span class="wrap"><span class="total-expense">${printNumberWithCommas(expense)}원</span></span>
    </div>
  </form>
`;

export default amountTemplate;
