import './styles/reset.scss'
import { Header } from './components/common/Header'
import { Navbar } from './components/common/Navbar'
import { SelectMonth } from './components/common/SelectMonth'

class App {
  constructor() {
    this.$app = document.querySelector('#App');
    this.init();
    this.header = new Header();
    this.month = new SelectMonth();
    this.navbar = new Navbar();
  }

  init() {
    this.$app.innerHTML = `
      <header></header>
      <div class="select-month"></div>
      <nav class="nav-bar"></nav>
    `
  }
}

new App();