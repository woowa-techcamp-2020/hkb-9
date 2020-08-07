import { METHOD, request } from './default';

export const createAccount = accountData =>
  request('/api/account', METHOD.POST(accountData, true));

export const getAccounts = () => request('/api/account', METHOD.GETWithToken());

export const deleteAccount = id =>
  request(`/api/account/${id}`, METHOD.DELETE());

export const modifyAccount = accountData =>
  request(`/api/account/${accountData.id}`, METHOD.PUT(accountData, true));
