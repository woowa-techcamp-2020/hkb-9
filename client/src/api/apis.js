const METHOD = {
  POSTWithHeader(body) {
    return {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(body),
    };
  },
  POST(body) {
    return {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  },
};

const apis = (() => {
  const request = (url, args) => fetch(url, args);
  const requestWithReturn = (url, args) =>
    request(url, args).then(res => res.json());

  return {
    createUser(args) {
      return request('/api/user', METHOD.POST(args));
    },
    login(body) {
      return requestWithReturn('/api/user/login', METHOD.POST(body));
    },
  };
})();

export default apis;
