import Controller from '../controllers/ControllerInterface';

class RoutesFactory {

    private _app;

    constructor(app) {
        this._app = app;
    }

    public addResource(url: string, controller: Controller): void {
        let index   =   url,
            show    =   `${url}/:id`,
            store   =   '',
            update  =   '',
            destroy =   ''
        
        controller.setUrl(url.slice(1, url.length));
        
        this._app.route(show).get   (controller.show);
        this._app.route(index).get  (controller.index);
        this._app.route(store).get  (controller.store);
        this._app.route(update).get (controller.update);
        this._app.route(destroy).get(controller.destroy);
    }

    public addRoute(url: string, callback: (req: Request, res: Response) => void): void {
        this._app.route(url).get(callback);
    }

}

export default RoutesFactory;
