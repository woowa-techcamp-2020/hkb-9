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
  const request = (url, args) => {
    try {
      return fetch(url, args);
    } catch (e) {
      console.error(e);
    }
  };
  const requestWithReturn = (url, args) =>
    request(url, args).then(res => res.json());
  return {
    createUser(args) {
      return request('/api/user', METHOD.POST(args));
    },
  };
})();

export default apis;
