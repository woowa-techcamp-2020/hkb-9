import * as accountApis from '../api/accountApis';
import observer from './observer';

class AccountModel {
  constructor() {
    this.observer = observer;
  }

  async fetchCreateAccount(accountData) {
    return await accountApis.createAccount(accountData);
  }
}

export default new AccountModel();
