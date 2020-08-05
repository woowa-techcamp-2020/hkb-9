export const promiseHandler = async promise => {
  return promise.then(data => [data, null]).catch(error => [null, error]);
};

export const parsePath = url => {
  const pathArray = url.split('/');
  const path = pathArray[pathArray.length - 1];
  return path;
};

export const isEmpty = value =>
  value === '' || value === null || value === undefined;

export const html = (s, ...args) =>
  s.map((ss, i) => `${ss}${args[i] || ''}`).join('');
