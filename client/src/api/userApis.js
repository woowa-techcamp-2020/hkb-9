import { METHOD, request } from './default';

export const join = async userData =>
  request('/api/user', METHOD.POST(userData));

export const login = async userData =>
  request('/api/user/login', METHOD.POST(userData));
