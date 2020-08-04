import { request, requestWithReturn, METHOD } from './default';

export const join = async userData => {
  try {
    await fetch('/api/user', METHOD.POST(userData));
  } catch (e) {
    throw e;
  }
};

export const login = async userData => {
  try {
    const response = await fetch('/api/user/login', METHOD.POST(userData));
    return response.json();
  } catch (e) {
    throw e;
  }
};
