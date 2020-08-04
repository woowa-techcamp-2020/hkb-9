import observer from '../models/observer';

class RouteController {
  setPage(path) {
    observer.notify('pageChange', path);
  }

  pushState(path) {
    history.pushState({ path }, null, path || '/');
    this.setPage(path);
  }
}

export default new RouteController();
