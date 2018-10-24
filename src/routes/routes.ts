
import {root} from '../controllers/home';

export class Routes {
    public setRoutes(app) : void {
        app.route('/').get(root)
    }
}