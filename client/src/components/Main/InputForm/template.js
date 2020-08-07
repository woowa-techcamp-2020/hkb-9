import { html } from '../../../utils/functions';

export const inputFormTemplate = html`
  <div class="input-form">      
    <div class="warn-type"></div>
    <div class="warn-category"></div>
    <div class="warn-card"></div>
    <div class="warn-amount"></div>
    <div class="warn-content"></div>
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
          selected
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
          value="2020-08-07"
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
        <input type="text" class="amount" name="amount" />

        <label for="content">내용</label>
        <input type="text" class="content" name="content" />
      </div>

      <button class="submit-btn" type="button">확인</button>
    </form>
  </div>
`;

export const incomeCategoryTemplate = html`
  <option selected disabled hidden>선택하세요</option>
  <option value="salary">월급</option>
  <option value="pocket">용돈</option>
  <option value="extra">기타수입</option>
`;

export const expenseCategoryTemplate = html`
  <option selected disabled hidden>선택하세요</option>
  <option value="food">식비</option>
  <option value="living">생활</option>
  <option value="shopping">쇼핑/뷰티</option>
  <option value="transportation">교통</option>
  <option value="health">의료/건강</option>
  <option value="culture">문화/여가</option>
  <option value="unclassified">미분류</option>
`;

export const initCardOptionTemplate = html`<option selected disabled hidden
  >선택하세요</option
>`;

export const cardOptionTemplate = (id, name) =>
  html`<option value=${id}>${name}</option>`;
