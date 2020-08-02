import './index.scss';
import { headerTemplate } from 'utils/template';
import { TAG_NAME } from 'utils/constants';

export default function Header() {
  if (new.target !== Header) {
    return new Header();
  }

  this.init = () => {
    this.$target = document.querySelector(TAG_NAME.HEADER);
    this.$target.innerHTML = headerTemplate;
  };

  this.init();
}
