import { METHOD, request, requestWithReturn } from './default';

export const join = async userData =>
  request('/api/user', METHOD.POST(userData));

export const login = async userData => {
  const response = await fetch('/api/user/login', METHOD.POST(userData));
  return response.json();
};
