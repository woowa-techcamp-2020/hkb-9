const listTemplate = `

    <form action="/">
      <div class="income">
        <input type="checkbox" id="checkbox-income" name="type">
        <label for="checkbox-income">수입</label>
        <span class="total-income">100원</span>
      </div>
      <div class="expense">
        <input type="checkbox" id="checkbox-expense" name="type">
        <label for="checkbox-expense">지출</label>
        <span class="total-expense">200원</span>
      </div>
    </form>

`;

export default listTemplate;
