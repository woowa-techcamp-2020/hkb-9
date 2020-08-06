import observer from '../models/observer';
import Account from '../models/accountModel';

class AccountController {
  constructor() {
    this.observer = observer;
  }

  setIsLogin(isLogin) {
    this.observer.notify('isLogin', isLogin);
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