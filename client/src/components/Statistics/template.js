const statisticsTemplate = `
  <section>
    <form>
      <div class="select-type">
        <input
          type="radio"
          id="category"
          class="category"
          name="type"
          value="category"
          checked
        />
        <label for="category" class="category">카테고리별 지출</label>
        <input
          type="radio"
          id="daily"    
          name="type"
          class="daily"  
          value="category"
        />
        <label for="daily" class="daily">일별 지출</label>
      </div>
    </form>
    <div class="pie-chart-container">
      <div class="pie-chart">
        <div class="pie-element-1"></div>
        <div class="pie-element-2"></div>
        <div class="pie-element-3"></div>
        <div class="pie-element-4"></div>
        <div class="pie-element-5"></div>
        <div class="line-1"></div>
        <div class="line-2"></div>
        <div class="line-3"></div>
        <div class="line-4"></div>
        <div class="line-5"></div>
        <div class="category-1">생활 및 식비 <span>54%</span></div>
        <div class="category-2">교통 <span>14%</span></div>
        <div class="category-3">쇼핑/뷰티 <span>13%</span></div>
        <div class="category-4">의료/건강 <span>11%</span></div>
        <div class="category-5">그 외 <span>8%</span></div>
      </div>
    </div>
    <div class="stick-chart-container">
      <div class="stick-chart">
        <div class="stick-1">생활 및 식비 <span>54%</span></div>
        <div class="stick-element-1"></div>
        <div class="stick-2">교통 <span>14%</span></div>
        <div class="stick-element-2"></div>
        <div class="stick-3">쇼핑/뷰티 <span>13%</span></div>
        <div class="stick-element-3"></div>
        <div class="stick-4">의료/건강 <span>11%</span></div>
        <div class="stick-element-4"></div>
        <div class="stick-5">그 외 <span>8%</span></div>
        <div class="stick-element-5"></div>
      </div>
    </div>
  </section>
`;

export default statisticsTemplate;
