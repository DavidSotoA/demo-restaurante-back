"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const routesFactory_1 = require("./routesFactory");
const TipodeComidaController_1 = require("../controllers/TipodeComidaController");
function makeRoutes(app) {
    return __awaiter(this, void 0, void 0, function* () {
        let routes = new routesFactory_1.default(app);
        let tipoDeComidaController = new TipodeComidaController_1.default();
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
        routes.addResource('/tipo-de-comidas', tipoDeComidaController);
    });
}
exports.default = makeRoutes;
//# sourceMappingURL=routes.js.map