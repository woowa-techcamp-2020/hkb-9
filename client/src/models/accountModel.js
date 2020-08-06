import * as accountApis from '../api/accountApis';

class AccountModel {
  constructor() {
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth() + 1;
    this.accounts = [];
    this.monthlyAccounts = [];
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
  }

  async getAccounts() {
    return await accountApis.getAccounts();
  }

  async createAccount(accountData) {
    return await accountApis.createAccount(accountData);
  }
}

export default new AccountModel();
