import { Request, Response } from 'express';

export default interface Controller {
    index   (req: Request, res: Response): void,
    show    (req: Request, res: Response): void,
    store   (req: Request, res: Response): void,
    update  (req: Request, res: Response): void,
    destroy (req: Request, res: Response): void,
}