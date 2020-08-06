import * as accountApis from '../api/accountApis';

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
      return {
        ...account,
        year: Number(account.payment_date.split('-')[0]),
      };
    });
    this.monthlyAccounts = this.accounts.filter(
      ({ month, year }) =>
        month === this.currentMonth && year === this.currentYear,
    );
    this.monthlyTotal = this.monthlyAccounts.reduce(
      (acc, cur) => acc + cur.amount,
      0,
    );
    this.monthlyIncome = this.monthlyAccounts
      .filter(account => account.type === 'income')
      .reduce((acc, cur) => acc + cur.amount, 0);
    this.monthlyExpense = this.monthlyTotal - this.monthlyIncome;
  }

  async getAccounts() {
    return await accountApis.getAccounts();
  }

  async createAccount(accountData) {
    return await accountApis.createAccount(accountData);
  }
}

export default new AccountModel();
