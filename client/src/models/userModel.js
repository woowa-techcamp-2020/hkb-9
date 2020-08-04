import userApis from '../api/userApis';
import observer from './observer';

class UserModel {
  constructor() {
    this.observer = observer;
  }

  async fetchLogin(userData) {
    try {
      const { accessToken } = await userApis.login(userData);
      return accessToken;
    } catch (e) {
      throw e;
    }
  }

  async fetchLogout() {
    window.localStorage.removeItem('accessToken');
  }
}

export default new UserModel();
