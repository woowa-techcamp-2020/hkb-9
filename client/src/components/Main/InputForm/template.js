const inputFormTemplate = `
  <form action="/">
    <span>분류</span>
    <input type="radio" class="income" name="type" value="income">
    <label for="import">수입</label>
    <input type="radio" class="expense" name="type" value="expense">
    <label for="expense">지출</label>
    <br>

    <label for="date">날짜</label>
      <input type="date" class="date" name="date" value="2020-08-03">


    <label for="category">카테고리</label>
    <select name="category" class="category">
      <option value="c1">c1</option>
      <option value="c2">c2</option>
      <option value="c3">c3</option>
      <option value="c4">c4</option>
    </select>
  </form>
`;

export default inputFormTemplate;
