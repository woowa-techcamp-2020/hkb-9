import Observer from '../models/observer';
import User from '../models/userModel';
class UserController extends Observer {
  setIsLogin(isLogin) {
    this.notify('isLogin', isLogin);
  }

  checkIsLogin() {
    const isLogin = window.localStorage.getItem('accessToken') ? true : false;
    this.setIsLogin(isLogin);
  }

  onModalVisible(modalName, isShow) {
    this.notify(modalName, isShow);
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
      window.localStorage.setItem('accessToken', accessToken);
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
