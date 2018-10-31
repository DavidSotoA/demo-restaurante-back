import TipoDeComidaController from '../controllers/TipodeComidaController';

export class Routes {

    public tipoDeComidaRoute(app) {
        const root  =   '/tipo-de-comidas',
              index =   root;

        app.route(index).get(TipoDeComidaController.index);
    }

    public setRoutes(app) {
        this.tipoDeComidaRoute(app);
    }

}