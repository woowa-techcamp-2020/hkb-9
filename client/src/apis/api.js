import { API_URL } from '../utils/constans';

const METHOD = {
  GET() {
    return {
      headers: {
        authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
      },
    };
  },
  POSTWithHeader(body) {
    return {
      headers: {
        authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
      },
      body: {
        ...JSON.stringify(body),
      },
    };
  },
  POST() {
    return {
      body: {
        ...JSON.stringify(body),
      },
    };
  },
};

const api = (() => {
  const request = (url, args) => fetch(url, args);
  const requestWithReturn = (url, args) =>
    request(url, args).then(res => res.json());
  return {
    getAccounts() {
      return requestWithReturn(`${API_URL + '/api/account'}`, METHOD.GET());
    },
    createAccount(args) {
      return request(
        `${API_URL + '/api/account'}`,
        METHOD.POSTWithHeader(args),
      );
    },
  };
})();

export default api;

// api.getAccccounts
