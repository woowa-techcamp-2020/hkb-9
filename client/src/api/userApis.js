import { METHOD, request } from './default';

export const join = userData =>
  request('/api/user', METHOD.POST(userData));

export const login = userData =>
  request('/api/user/login', METHOD.POST(userData));
