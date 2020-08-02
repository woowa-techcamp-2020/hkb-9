/* eslint-disable no-new */
import './styles/reset.scss';
import { TAG_NAME } from '../utils/constants';
import { defaultHTMLTemplate, mainPageTemplate, calendarPageTemplate } from '../utils/template';
import { Navigation } from './components/common/Navigation';
import { SelectMonth } from './components/common/SelectMonth';
import { Header } from './components/common/Header';
import MainPage from './pages/MainPage';
import CalendarPage from './pages/CalendarPage';

function App() {
  this.init = () => {
    this.$target = document.querySelector('#App');
    this.$target.innerHTML = defaultHTMLTemplate;

    new Header();
    new SelectMonth({
      onClickButton: () => {},
    });
    this.Navigation = new Navigation();
    this.bindEvent();

    this.render('');
  };

  this.render = (path) => {
    const $main = document.querySelector(TAG_NAME.MAIN);
    if (!path) {
      $main.innerHTML = mainPageTemplate;
      new MainPage();
    } else if (path === 'calendar') {
      $main.innerHTML = calendarPageTemplate;
      new CalendarPage();
    }
  };

  this.bindEvent = () => {
    const popStateHandler = (e) => {
      const { path } = e.state;
      this.render(path);
    };

    const onClickHandler = (e) => {
      if (e.target.tagName !== TAG_NAME.A) {
        return;
      }
      e.preventDefault();
      const splitArray = e.target.href.split('/');
      const path = splitArray[splitArray.length - 1];
      history.pushState({ path }, null, path);
      this.render(path);
    };

    this.Navigation
      .getHTMLElement()
      .addEventListener('click', onClickHandler);

    window.addEventListener('popstate', popStateHandler);
  };

  this.init();
}

try {
  console.log('123');
  new App();
} catch (e) {
  console.error(e);
}
