import { html } from '../../../utils/functions';

const cardModalTemplate = html`
  <div class="card-modal">
    <div class="modal-wrapper">
      <div class="head">
        <div>
          <i class="f7-icons close-btn">xmark_square_fill</i>
        </div>
        <div class="title">결제 수단 관리</div>
      </div>
      <div class="input-wrapper">
        <input
          type="text"
          name="card-input"
          placeholder="카드 이름을 입력해주세용"
        />
      </div>
      <hr />
      <div class="card-list">
        <div>배민 페이</div>
        <i class="f7-icons delete-btn">xmark_circle</i>
      </div>
    </div>
  </div>
`;

export default cardModalTemplate;
