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
    new Header();
    new SelectMonth();
    this.navbar = new Navbar();

    if (!checkIsLogin()) {
      new LoginModal();
      new JoinModal();
    }

    this.bindEvent();
    const path = parsePath(window.location.href); // 새로고침할 때 기본 Url 체크
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
