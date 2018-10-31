import { Request, Response } from 'express';
import db from '../dbConnection';

class TipoDeComidaController {

    public index(req: Request, res: Response): void {
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
    
}

export default new TipoDeComidaController();