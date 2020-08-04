import observer from '../models/observer';
import User from '../models/userModel';

class UserController {
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

  async loginController(userData) {
    try {
      const accessToken = await User.fetchLogin(userData);
      window.localStorage.setItem(accessToken);
      this.setIsLogin(true);
    } catch (e) {
      alert(e.status);
      console.error(e); // 상태코드에 따라 render 해야하는데 흠..
    }
  }
}

export default new UserController();
