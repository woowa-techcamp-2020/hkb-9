import { Navbar } from '../components/common/Navbar';
import { SelectMonth } from '../components/common/SelectMonth';
import { Main } from '../components/Main';
import { Calendar } from '../components/Calendar';
import { cardController, routeController } from '../controllers';
import { parsePath } from '../utils/functions';

export default class HkbPage {
  constructor() {
    this.init();
  }
  async init() {
    new Navbar();
    new SelectMonth();
    await cardController.requestGetCards();
    routeController.subscribe('pageChange', this, this.render.bind(this));

    this.render(parsePath(window.location.href)); // 새로고침 > 기본 경로 체크
  }

  render(path) {
    if (!path) {
      new Main();
    } else if (path === 'calendar') {
      new Calendar();
    }
  }
}
