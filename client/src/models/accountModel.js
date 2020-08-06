import * as accountApis from '../api/accountApis';

class AccountModel {
  constructor() {
    this.accounts = [];
  }

  set(nextData) {
    this.accounts = nextData.concat();
  }

  async fetchCreateAccount(accountData) {
    return await accountApis.createAccount(accountData);
  }
}

export default new AccountModel();
