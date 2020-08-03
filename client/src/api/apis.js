const METHOD = {
  POST(body, headers = {}) {
    return {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...headers,
      },
      body: {
        ...JSON.stringify(body),
      },
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
  };
})();

export default apis;
