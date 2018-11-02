"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RoutesFactory {
    constructor(app) {
        this._app = app;
    }
    addResource(url, controller) {
        let index = url, show = `${url}/:id`, store = '', update = '', destroy = '';
        controller.setUrl(url.slice(1, url.length));
        this._app.route(show).get(controller.show);
        this._app.route(index).get(controller.index);
        this._app.route(store).get(controller.store);
        this._app.route(update).get(controller.update);
        this._app.route(destroy).get(controller.destroy);
    }
    addRoute(url, callback) {
        this._app.route(url).get(callback);
    }
}
exports.default = RoutesFactory;
//# sourceMappingURL=routesFactory.js.map