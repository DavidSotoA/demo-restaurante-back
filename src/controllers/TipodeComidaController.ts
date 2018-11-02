import { Request, Response } from 'express';
import Controller from './ControllerInterface';
import {getManager} from "typeorm";
import TipoDeComida from "../models/TipoDeComida";
require('dotenv').config();

class TipoDeComidaController implements Controller {

    private repo;
    private url;

    constructor() {
        this.repo = getManager().getRepository(TipoDeComida);

        this.index      = this.index.bind(this);
        this.show       = this.show.bind(this);
        this.store      = this.store.bind(this);
        this.update     = this.update.bind(this);
        this.destroy    = this.destroy.bind(this);
        this.setUrl     = this.setUrl.bind(this);
    }

    public setUrl(url: string) {
        this.url = url;
    }

    async index(req: Request, res: Response) {
        try {
            var data = await this.repo.find();

            data = data.map( item => {
                item.link = `${process.env.DOMAIN}/${this.url}/${item.id}`
                return item;
            } )

            res.status(200).send(data);
        } catch( e ) {
            console.log(e);
        }
    }

    async show(req: Request, res: Response) {
        try {
            let id = req.params.id;
            let data = await this.repo.find({id: id});
            res.status(200).send(data[0]);
        } catch( e ) {
            console.log(e);
        }
    }


    async store(req: Request, res: Response) {}
    async update(req: Request, res: Response) {}
    async destroy(req: Request, res: Response) {}
}

export default TipoDeComidaController;