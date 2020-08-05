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

  onModalVisible(modalName, isShow) {
    this.observer.notify(modalName, isShow);
  }

  async requestJoin(userData) {
    const res = await User.fetchJoin(userData);
    if (res.ok) {
      this.onModalVisible('joinModalVisible', false);
      this.onModalVisible('loginModalVisible', true);
      return;
    }
    return res.status;
  }

  async requestLogin(userData) {
    const res = await User.fetchLogin(userData);
    if (res.ok) {
      const { accessToken } = await res.json();
<<<<<<< HEAD
      window.localStorage.setItem('accessToken', accessToken);
=======
      window.localStorage.setItem('accessToken', res.accessToken);
>>>>>>> feat/30-fe-mainpage-additional
      this.onModalVisible('loginModalVisible', false);
      this.setIsLogin(true);
      return;
    }
    return res.status;
  }

  requestLogout() {
    window.localStorage.removeItem('accessToken');
    window.location.href = '/';
    window.location.reload();
  }
}

export default new UserController();
