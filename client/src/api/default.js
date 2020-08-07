const setTokenInHeader = options => ({
  ...options,
  headers: {
    ...options.headers,
    authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
  },
});
export const METHOD = {
  GETWithToken() {
    return setTokenInHeader({});
  },
  POST(body, isJWT) {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    return isJWT ? setTokenInHeader(options) : options;
  },
  DELETE() {
    const option = { method: 'DELETE' };
    return setTokenInHeader(option);
  },
};

export const request = (url, args) => fetch(url, args);
export const requestWithReturn = (url, args) =>
  request(url, args).then(res => res.json());
