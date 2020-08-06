import Observer from '../models/observer';
import Account from '../models/accountModel';

class AccountController extends Observer {
  setAccounts(accounts) {
    this.notify('accountChanged', accounts);
  }

  async requestCreateAccount(accountData) {
    const res = await Account.fetchCreateAccount(accountData);
    if (res.ok) {
      const { accounts } = await res.json();
      Account.set(accounts);
      this.setAccounts(accounts);
    }
    return res.status;
  }
}

export default new AccountController();
