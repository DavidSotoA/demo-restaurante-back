#!/bin/bash

echo "import { Request, Response } from 'express';
import Controller from './ControllerInterface';
import db from '../dbConnection';

class $1Controller implements Controller {
	
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

export default new $1Controller();" > ./src/controllers/$1Controller.ts
