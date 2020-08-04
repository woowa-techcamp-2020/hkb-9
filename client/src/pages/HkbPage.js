import { Navbar } from '../components/common/Navbar';
import { SelectMonth } from '../components/common/SelectMonth';

export default class HkbPage {
  constructor() {
    this.init();
  }
  init() {
    new Navbar();
    new SelectMonth();
  }

  render() {}
}
