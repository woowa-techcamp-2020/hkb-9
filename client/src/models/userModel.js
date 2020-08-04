import * as userApis from '../api/userApis';
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

  // error throw 되는지 테스트하기
  async fetchJoin(userData) {
    return await userApis.join(userData);
  }

  async fetchLogout() {
    window.localStorage.removeItem('accessToken');
  }
}

export default new UserModel();
