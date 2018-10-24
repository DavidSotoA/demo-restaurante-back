import { Request, Response } from 'express';

export let root = (req: Request, res: Response) => {

    res.status(200).send({
        message: 'Hola Mundo'
    })
    
}