const { html } = require('../../utils/functions');

const cardItemTemplate = ({ id, name }) => html` <li
  data-id=${id}
  class="card-item"
>
  <div>${name}</div>
  <i class="f7-icons delete-btn">xmark_circle</i>
</li>`;

export default cardItemTemplate;
