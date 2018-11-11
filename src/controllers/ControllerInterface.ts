import { Request, Response } from 'express';
import Model from "../models/ModelInterface";

export default interface Controller {
    index   (),
    show    (args: {id: number}),
    store   (args: {resource: Model} ),
    update  (args: {id: number, resource: Model}),
    destroy (args: {id: number}),
}