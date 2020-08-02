import './index.scss';
import { navigationTemplate } from '../../../../utils/template';
import { CLASS_NAME, TAG_NAME } from '../../../../utils/constants';

export default function Navigation() {
  if (new.target !== Navigation) {
    return new Navigation();
  }

  this.init = () => {
    this.$target = document.querySelector(`.${CLASS_NAME.PAGE_FILTER}`);
    this.$target.innerHTML = navigationTemplate;
  };

  this.getHTMLElement = () => this.$target;

  this.init();
}
