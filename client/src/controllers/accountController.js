import Observer from '../models/observer';
import Account from '../models/accountModel';

class AccountController extends Observer {
  setIsLogin(isLogin) {
    this.notify('isLogin', isLogin);
  }

  checkIsLogin() {
    const isLogin = window.localStorage.getItem('accessToken') ? true : false;
    this.setIsLogin(isLogin);
  }

  async requestCreateAccount(accountData) {
    const res = await Account.fetchCreateAccount(accountData);
  }
}

export default new AccountController();
