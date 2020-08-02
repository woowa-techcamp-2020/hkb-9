/* eslint-disable no-new */
import 'styles/reset.scss';
import CalendarPage from './pages/CalendarPage';

function App() {
  this.init = () => {
    new CalendarPage();
  };

  this.init();
}

try {
  new App();
} catch (e) {
  console.error(e);
}
