import Observer from '../models/observer';

class RouteController extends Observer {
  setPage(path) {
    this.notify('pageChange', path);
  }

  pushState(path) {
    history.pushState({ path }, null, path || '/');
    this.setPage(path);
  }
}

export default new RouteController();
