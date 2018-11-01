"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routesFactory_1 = require("./routesFactory");
const TipodeComidaController_1 = require("../controllers/TipodeComidaController");
function makeRoutes(app) {
    let routes = new routesFactory_1.default(app);
    /*
        Aca debajo van las rutas.

        Con el metodo addResource se agregan las rutas para todos los metodos por defecto
        (el CRUD del controlador) estos son:
         * index
         * show
         * store
         * update
         * destroy
        
        Con el metodo addRoute se agrega otro metodo diferente a los metodos por defecto

    */
    routes.addResource('/tipo-de-comidas', TipodeComidaController_1.default);
}
exports.default = makeRoutes;
//# sourceMappingURL=routes.js.map