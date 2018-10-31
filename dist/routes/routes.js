"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TipodeComidaController_1 = require("../controllers/TipodeComidaController");
class Routes {
    tipoDeComidaRoute(app) {
        const root = '/tipo-de-comidas', index = root;
        app.route(index).get(TipodeComidaController_1.default.index);
    }
    setRoutes(app) {
        this.tipoDeComidaRoute(app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map