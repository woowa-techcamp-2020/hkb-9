import './index.scss';
import { CLASS_NAME } from 'utils/constants';
import { pageFilterTemplate } from 'utils/template';

export default function PageFilter() {
  if (new.target !== PageFilter) {
    return new PageFilter();
  }

  this.init = () => {
    this.$target = document.querySelector(`.${CLASS_NAME.PAGE_FILTER}`);
    this.$target.innerHTML = pageFilterTemplate;
  };

  this.init();
}
