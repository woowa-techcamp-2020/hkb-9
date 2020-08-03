const listTemplate = `

    <form action="/">
      <div class="income">
        <input type="checkbox" class="checkbox-income" name="type" value="income">
        <label for="income">수입</label>
        <span class="total-income">100원</span>
      </div>
      <div class="expense">
        <input type="checkbox" class="checkbox-expense" name="type" value="expense">
        <label for="expense">지출</label>
        <span class="total-expense">200원</span>
      </div>
    </form>

`;

export default listTemplate;
