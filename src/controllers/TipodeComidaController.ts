import { Request, Response } from 'express';
import Controller from './ControllerInterface';
import db from '../dbConnection';

class TipoDeComidaController implements Controller {

    index(req: Request, res: Response): void {
        db.many("SELECT id, nombre, descripcion, imagen FROM tipo_de_comida")
            .then( data => {
                res.status(200).send({
                    tipos_de_comida: data
                })
            })
            .catch( error => {
                console.log("ERROR:", error);
        });
    }

    show    (req: Request, res: Response): void{}
    store   (req: Request, res: Response): void{}
    update  (req: Request, res: Response): void{}
    destroy (req: Request, res: Response): void{}
}

export default new TipoDeComidaController();