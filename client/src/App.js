import './styles/reset.scss'
import { Header } from './components/common/Header'
import { Navbar } from './components/common/Navbar'
import { SelectMonth } from './components/common/SelectMonth'
import MainPage from './pages/MainPage';
import CalendarPage from './pages/CalendarPage';


class App {
  constructor() {
    this.$app = document.querySelector('#App');
    this.init();
    new Header();
    new SelectMonth();
    this.navbar = new Navbar();

    this.bindEvent()
    this.render()
  }

  init() {
    this.$app.innerHTML = `
      <header></header>
      <div class="select-month"></div>
      <nav class="nav-bar"></nav>
      <main></main>
    `
  }

  render(path) {
    if (!path) {
      new MainPage()
    } else if (path === 'calendar') {
      new CalendarPage()
    }
  }

  bindEvent() {
    this.navbar.getElement().addEventListener('click', (e) => {
      if(e.target.tagName !== 'A') {
        return
      }
      e.preventDefault()
      const pathArray = e.target.href.split('/')
      const path = pathArray[pathArray.length-1]
      history.pushState({ path }, null, path)
      this.render(path)
    })

    window.addEventListener('popstate', e => {
      const { path } = e.state
      this.render(path)
    })
  }
}

new App();