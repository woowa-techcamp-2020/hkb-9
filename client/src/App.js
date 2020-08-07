import { Header } from './components/common/Header';
import { HkbPage } from './pages';
import { LoginModal } from './components/modal/LoginModal';
import { JoinModal } from './components/modal/JoinModal';
import observer from './models/observer';
import { userController, routeController } from './controllers';
class App {
  constructor() {
    this.$app = document.querySelector('#App');
    this.init();
    this.bindEvent();
  }

  init() {
    this.header = new Header();
    userController.subscribe('isLogin', this, this.render.bind(this));
    userController.checkIsLogin();
  }

  render(isLogin) {
    if (isLogin) {
      new HkbPage();
      return;
    }
    new LoginModal();
    new JoinModal();
  }

  bindEvent() {
    const onPopState = ({ state }) => {
      routeController.setPage(state.path);
    };

    window.addEventListener('popstate', onPopState);
  }
}

export default App;
