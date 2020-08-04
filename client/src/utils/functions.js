export const parsePath = url => {
  const pathArray = url.split('/');
  const path = pathArray[pathArray.length - 1];
  return path;
};

export const checkIsLogin = () => window.localStorage.getItem('accessToken');

export const html = (s, ...args) =>
  s.map((ss, i) => `${ss}${args[i] || ''}`).join('');
