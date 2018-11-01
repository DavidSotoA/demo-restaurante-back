import Controller from '../controllers/ControllerInterface';

import Routes from './routesFactory';
import TipoDeComidaController from '../controllers/TipodeComidaController';

function makeRoutes(app) {
    let routes = new Routes(app);

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
    routes.addResource('/tipo-de-comidas', TipoDeComidaController);
}


export default makeRoutes;

