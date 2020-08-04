export const METHOD = {
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

export const request = (url, args) => fetch(url, args);

export const requestWithReturn = (url, args) =>
  request(url, args).then(res => res.json());
