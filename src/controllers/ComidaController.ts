import { Request, Response } from 'express';
import Controller from './ControllerInterface';
import db from '../dbConnection';

class ComidaController implements Controller {
	
    index(req: Request, res: Response): void {

    }

    show(req: Request, res: Response): void {

    }

    store(req: Request, res: Response): void {

    }

    update(req: Request, res: Response): void {

    }

    destroy(req: Request, res: Response): void {

    }
}

export default new ComidaController();
