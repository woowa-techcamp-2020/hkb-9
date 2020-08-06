import Observer from '../models/observer';
import Account from '../models/accountModel';

class AccountController extends Observer {
  setAccounts(accounts) {
    Account.setAccounts(accounts); // accounts는 할게 많으니 특별히 model에 setAccounts 만듬

    // 파싱한 거 가져와야하네

    this.notify('accountChanged', accounts.concat()); // 이거 필요한가?
    this.setAmount(Account.get('monthlyIncome'), Account.get('monthlyExpense'));
  }

  setAmount(income, expense) {
    this.notify('amountChanged', { income, expense });
  }

  setMonth(month) {
    Account.set('currentMonth', month);
    this.notify('monthChanged', month);
  }

  get(keyName) {
    return Account.get(keyName);
  }

  changeMonth(type) {
    const currentMonth = Account.get('currentMonth');
    if (type === 'prev') {
      if (currentMonth - 1 === 0) {
        this.setMonth(12);
        Account.set('currentYear', Account.get('currentYear') - 1);
        return;
      }
      this.setMonth(currentMonth - 1);
      return;
    }
    if (currentMonth + 1 === 13) {
      Account.set('currentYear', Account.get('currentYear') + 1);
      this.setMonth(1);
      return;
    }
    this.setMonth(currentMonth + 1);
  }

  async requestGetAccounts() {
    const res = await Account.getAccounts();
    if (!res.ok) {
      return res.status;
    }
    const { accounts } = await res.json();
    this.setAccounts(accounts);
  }

  async requestCreateAccount(accountData) {
    const res = await Account.createAccount(accountData);
    if (res.ok) {
      const { accounts } = await res.json();
      this.setAccounts(accounts);
    }
    return res.status;
  }
}

export default new AccountController();
