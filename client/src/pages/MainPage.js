import { TAG_NAME } from '../../utils/constants';
import { mainPageTemplate } from '../../utils/template';

export default function MainPage() {
  if (new.target !== MainPage) {
    return new MainPage();
  }

  this.init = () => {

  };

  this.init();
}
