import { Header } from './components/common/Header';
import { HkbPage } from './pages';

import { Main } from './components/Main';
import { Calendar } from './components/Calendar';
import { LoginModal } from './components/modal/LoginModal';
import { JoinModal } from './components/modal/JoinModal';
import { parsePath, checkIsLogin, html } from './utils/functions';
import { CardModal } from './components/modal/CardModal';

import observer from './models/observer';
import { userController } from './controllers';
class App {
  constructor() {
    // App constructor 분리해줘야함
    this.$app = document.querySelector('#App');
    this.init();

    // /* modal start */
    // this.loginModal = new LoginModal({
    //   onModalVisible: this.onModalVisible.bind(this),
    //   renderApp: this.render.bind(this),
    // });
    // this.joinModal = new JoinModal({
    //   onModalVisible: this.onModalVisible.bind(this),
    // });
    // this.cardModal = new CardModal({
    //   onModalVisible: this.onModalVisible.bind(this),
    // });
    // /* modal end */

    // this.bindEvent();
    // const path = parsePath(window.location.href); // 새로고침할 때 기본 Url 체크

    // if (!checkIsLogin()) {
    //   this.onModalVisible('loginModal', true); // login modal render
    //   return;
    // }

    // this.render(path);
  }

  init() {
    this.header = new Header();
    observer.subscribe('isLogin', this, this.render.bind(this));
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

  // onModalVisible(modalName, visible) {
  //   this[modalName].render(visible);
  // } // modal visible management

  // render(path) {
  //   if (!path) {
  //     new Main();
  //   } else if (path === 'calendar') {
  //     new Calendar();
  //   }
  // }

  // bindEvent() {
  //   this.navbar.getElement().addEventListener('click', e => {
  //     if (e.target.tagName !== 'A') {
  //       return;
  //     }
  //     e.preventDefault();
  //     const path = parsePath(e.target.href);
  //     history.pushState({ path }, null, path || '/');
  //     this.render(path);
  //   });

  //   window.addEventListener('popstate', e => {
  //     const { path } = e.state;
  //     this.render(path);
  //   });
  // }
}

export default App;
