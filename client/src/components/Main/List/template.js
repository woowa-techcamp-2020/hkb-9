import { html } from '../../../utils/functions';

const listTemplate = account => {
  return html` <div class="item-container" id="date-${account[0]}"></div> `;
};

export default listTemplate;
