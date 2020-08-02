/* Common Component Template Start */
export const headerTemplate = `<header>
  <span class="title">가계부</span>
  <div class="side">
    <span>결제 수단관리</span>
  </div>
</header>`;

export const selectMonthTemplate = (currentMonth) => `
  <i class="f7-icons prev">arrowtriangle_left</i>
  <span class="month">${currentMonth}월</span>
  <i class="f7-icons next">arrowtriangle_right</i>
`;

export const navigationTemplate = `
  <div class="filter-box">
    <a href="/" class="log">내역</a>
    <a href="/calendar" class="calendar">달력</a>
    <a href="/statics" class="statics">통계</a>
  </div>
`;

/* Common Component Template End */

export const calendarTemplate = `
  <div class="weekdays">
    <div class="red">일</div>
    <div>월</div>
    <div>화</div>
    <div>수</div>
    <div>목</div>
    <div>금</div>
    <div>토</div>
  </div>
  <div class="days">
  </div>
`;

export const defaultHTMLTemplate = `
  <header></header>
  <div class="select-month"></div>
  <div class="page-filters"></div>
  <main></main>
`;

export const mainPageTemplate = `
  <div class="main-container">Main Page</div>
`;

export const calendarPageTemplate = `
  <div class="calendar-container"></div>
`;
