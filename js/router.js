export class Router {
  constructor(routes) {
    this.routes = routes;
    this._onHashChange = this._onHashChange.bind(this);
    window.addEventListener('hashchange', this._onHashChange);
  }

  start() {
    if (!window.location.hash) {
      window.location.hash = '#/';
    }
    this._onHashChange();
  }

  _onHashChange() {
    const hash = window.location.hash || '#/';
    const path = hash.slice(1); // remove '#'

    for (const { pattern, handler } of this.routes) {
      const match = path.match(pattern);
      if (match) {
        handler(match);
        return;
      }
    }

    // Fallback: redirect to home
    window.location.hash = '#/';
  }

  static route(pattern, handler) {
    return { pattern, handler };
  }
}
