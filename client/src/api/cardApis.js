import { METHOD, request } from './default';

export const create = cardName =>
  request('/api/card', METHOD.POST({ name: cardName }, true));

export const getAll = () => request('/api/card', METHOD.GET(true));
