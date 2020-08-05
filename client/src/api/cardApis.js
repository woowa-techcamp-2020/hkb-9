import { METHOD, request } from './default';

export const create = cardName =>
  request('/api/card', METHOD.POSTWithHeader({ name: cardName }));
