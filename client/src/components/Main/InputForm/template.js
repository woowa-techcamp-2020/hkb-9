const inputFormTemplate = `
<div class="input-form">
  <form>
    <button class="delete-btn" type="button">내용 지우기</button>

    <div class="select-type">
      <label>분류</label>
      <input type="radio" id="income" class="income" name="type" value="income">
      <label for="income">수입</label>
      <input type="radio" id="expense" class="expense" name="type" value="expense">
      <label for="expense">지출</label>
    </div>

    <div class="input-form-1">
      <label>날짜</label>
      <input type="date" id="date" class="date" name="date" value="2020-08-03">

      <label for="category">카테고리</label>
      <select name="category" class="category">
        <option value="c1">c1</option>
        <option value="c2">c2</option>
        <option value="c3">c3</option>
        <option value="c4">c4</option>
      </select>

      <label for="card">결제수단</label>
      <select name="card" class="card">
        <option value="card1">card1</option>
        <option value="card2">card2</option>
        <option value="card3">card3</option>
        <option value="card4">card4</option>
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
