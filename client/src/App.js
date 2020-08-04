import './styles/reset.scss';
import { Header } from './components/common/Header';
import { Navbar } from './components/common/Navbar';
import { SelectMonth } from './components/common/SelectMonth';
import { Main } from './components/Main';
import { Calendar } from './components/Calendar';
import { LoginModal } from './components/modal/LoginModal';
import { JoinModal } from './components/modal/JoinModal';
import { parsePath, checkIsLogin } from './utils/functions';

class App {
  constructor() {
    this.$app = document.querySelector('#App');
    this.init();
    this.header = new Header();
    new SelectMonth();
    this.navbar = new Navbar();
    this.loginModal = new LoginModal({
      onModalVisible: this.onModalVisible.bind(this),
      renderApp: this.render.bind(this),
    });
    this.joinModal = new JoinModal({
      onModalVisible: this.onModalVisible.bind(this),
    });
    this.bindEvent();
    const path = parsePath(window.location.href); // 새로고침할 때 기본 Url 체크

    if (!checkIsLogin()) {
      this.onModalVisible('loginModal', true); // login modal render
      return;
    }

    this.render(path);
  }

  init() {
    this.$app.innerHTML = `
      <header></header>
      <div class="select-month"></div>
      <nav class="nav-bar"></nav>
      <main></main>
      <div class="modal"></div>
    `;
  }

  onModalVisible(modalName, visible) {
    this[modalName].render(visible);
  } // modal visible management

  render(path) {
    if (!path) {
      new Main();
    } else if (path === 'calendar') {
      new Calendar();
    }
  }

  bindEvent() {
    this.navbar.getElement().addEventListener('click', e => {
      if (e.target.tagName !== 'A') {
        return;
      }
      e.preventDefault();
      const path = parsePath(e.target.href);
      history.pushState({ path }, null, path || '/');
      this.render(path);
    });

    window.addEventListener('popstate', e => {
      const { path } = e.state;
      this.render(path);
    });
  }
}

new App();
