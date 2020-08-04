export const promiseHandler = async promise => {
  return promise.then(data => [data, null]).catch(error => [null, error]);
};

export const parsePath = url => {
  const pathArray = url.split('/');
  const path = pathArray[pathArray.length - 1];
  return path;
};

export const checkIsLogin = () => window.localStorage.getItem('accessToken');

export const html = (s, ...args) =>
  s.map((ss, i) => `${ss}${args[i] || ''}`).join('');
