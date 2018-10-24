"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_1 = require("../controllers/home");

class Routes {
    setRoutes(app) {
        app.route('/').get(home_1.root);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map