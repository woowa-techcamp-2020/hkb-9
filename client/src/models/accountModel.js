import * as accountApis from '../api/accountApis';
import { parseDatetime, getDayName } from '../utils/functions';
class AccountModel {
  constructor() {
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth() + 1;
    this.accounts = [];
    this.monthlyAccounts = [];
    this.monthlyTotal = 0;
    this.monthlyIncome = 0;
    this.monthlyExpense = 0;
  }

  get(keyName) {
    return this[keyName];
  }

  set(keyName, value) {
    this[keyName] = value;
  }

  setAccounts(accounts) {
    this.accounts = accounts.map(account => {
      const dateObj = parseDatetime(account.payment_date);
      return {
        ...account,
        year: dateObj.year,
        date: dateObj.date - 1, // 한국시간
      };
    });

    const accountsFilterByMonth = this.accounts
      .filter(
        ({ month, year }) =>
          month === this.currentMonth && year === this.currentYear,
      )
      .sort((a, b) => new Date(b.payment_date) - new Date(a.payment_date));

    this.monthlyTotal = accountsFilterByMonth.reduce(
      (acc, cur) => acc + cur.amount,
      0,
    );

    this.monthlyIncome = accountsFilterByMonth
      .filter(account => account.type === 'income')
      .reduce((acc, cur) => acc + cur.amount, 0);

    this.monthlyExpense = this.monthlyTotal - this.monthlyIncome;

    /* render data parse start */
    const items = new Map();
    accountsFilterByMonth.forEach(account => {
      const { date, type, amount, payment_date } = account;
      if (items.has(date)) {
        const item = items.get(date);
        item[type] += amount;
        item.day = getDayName(parseDatetime(payment_date).day - 1);
        item.contents.push(account);
        return;
      }
      items.set(date, {
        income: type === 'income' ? amount : 0,
        expense: type === 'expense' ? amount : 0,
        day: getDayName(parseDatetime(payment_date).day - 1),
        contents: [account],
      });
    });

    this.monthlyAccounts = items;
    console.log(this.monthlyAccounts);
    /* render data parse end */
  }

  async getAccounts() {
    return await accountApis.getAccounts();
  }

  async createAccount(accountData) {
    return await accountApis.createAccount(accountData);
  }
}

export default new AccountModel();
