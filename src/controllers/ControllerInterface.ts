import { Request, Response } from 'express';

export default interface Controller {
    setUrl  (url:  string);
    index   (req: Request, res: Response),
    show    (req: Request, res: Response),
    store   (req: Request, res: Response),
    update  (req: Request, res: Response),
    destroy (req: Request, res: Response),
}