import { html } from '../../../utils/functions';

const inputFormTemplate = html`
  <div class="input-form">
    <form>
      <button class="delete-btn" type="button">내용 지우기</button>

      <div class="select-type">
        <label class="title">분류</label>
        <input
          type="radio"
          id="income"
          class="income"
          name="type"
          value="income"
        />
        <label for="income" class="income">수입</label>
        <input
          type="radio"
          id="expense"
          class="expense"
          name="type"
          value="expense"
        />
        <label for="expense" class="expense">지출</label>
      </div>

      <div class="input-form-1">
        <label for="date">날짜</label>
        <input
          type="date"
          id="date"
          class="date"
          name="paymentDate"
          value="2020-08-05"
        />

        <label for="category">카테고리</label>
        <select name="category" class="category">
        <option selected disabled hidden>선택하세요</option>
        </select>

        <label for="card">결제수단</label>
        <select name="cardId" class="card">
          <option selected disabled hidden>선택하세요</option>  
        </select>
      </div>

      <div class="input-form-2">
        <label for="amount">금액</label>
        <input type="number" class="amount" name="amount" />

        <label for="content">내용</label>
        <input type="text" class="content" name="content" />
      </div>

      <button class="submit-btn" type="button">확인</button>
    </form>
  </div>
`;

export default inputFormTemplate;
