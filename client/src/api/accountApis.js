import { METHOD, request } from './default';

export const createAccount = accountData =>
  request('/api/account', METHOD.POST(accountData, true));

export const getAccounts = () => request('/api/account', METHOD.GETWithToken());
