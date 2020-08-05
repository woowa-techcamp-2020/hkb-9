const inputFormTemplate = /*html*/ `
<div class="input-form">
  <form>
    <button class="delete-btn" type="button">내용 지우기</button>

    <div class="select-type">
      <label class="title">분류</label>
      <input type="radio" id="income" class="income" name="type" value="income">
      <label for="income" class="income">수입</label>
      <input type="radio" id="expense" class="expense" name="type" value="expense">
      <label for="expense" class="expense">지출</label>
    </div>

    <div class="input-form-1">
      <label for="date">날짜</label>
      <input type="date" id="date" class="date" name="date" value="2020-08-03">

      <label for="category">카테고리</label>
      <select name="category" class="category">
        <option>c1</option>
        <option>c2</option>
        <option>c3</option>
        <option>c4</option>
      </select>

      <label for="card">결제수단</label>
      <select name="card" class="card">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </div>

    <div class="input-form-2">
      <label for="amount">금액</label>
      <input type="text" class="amount" name="amount" value="amount">

      <label for="content">내용</label>
      <input type="text" class="content" name="content" value="content">
    </div>

    <button class="submit-btn" type="button">확인</button>
  </form>
  </div>
`;

export default inputFormTemplate;
