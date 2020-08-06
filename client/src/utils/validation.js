export const isEmpty = value =>
  value === null || value === undefined || value === '';

/* InputForm Validation Start*/
export const getCheckedRadioElement = elements =>
  Array.from(elements).find(element => element.checked);
