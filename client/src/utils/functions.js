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

export const printNumberWithCommas = value =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const deleteCommas = value => value.split(',').join('').slice(0, -1);

export const returnDateFormat = date => {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-'); // return YYYY-MM-DD
};

export const parseDatetime = datetime => {
  const date = new Date(datetime);
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    day: date.getDay(),
  };
};

export const getDayName = day => {
  const name = ['일', '월', '화', '수', '목', '금', '토'];
  return name[day];
};

export const mapForIterator = (iterator, func) => {
  const res = [];
  for (const v of iterator) {
    res.push(func(v));
  }
  return res;
};
