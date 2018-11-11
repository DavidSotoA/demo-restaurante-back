import { Request, Response } from 'express';
import Controller from './ControllerInterface';
import {getManager, getConnection} from 'typeorm';
import Comida from '../models/Comida';

class ComidaController implements Controller {

    private repo;

    constructor() {
        this.repo = getManager().getRepository(Comida);

        this.index      = this.index.bind(this);
        this.show       = this.show.bind(this);
        this.store      = this.store.bind(this);
        this.update     = this.update.bind(this);
        this.destroy    = this.destroy.bind(this);
    }


    async index() {
        try {
            return await this.repo.find();
        } catch( e ) {
            console.log(e);
        }
    }

    async show(args: {id: number}) {
        try {
            let x = await this.repo.find({id: args.id});
            return x[0]
        } catch( e ) {
            console.log(e);
        }
    }

    async store(args) {
        try {
            let result = await getConnection()
                            .createQueryBuilder()
                            .insert()
                            .into(Comida)
                            .values([
                                args.comida
                            ])
                            .execute();

            let x = await this.repo.find({id: result.identifiers[0].id});
            return x[0];
        } catch( e ) {
            console.log(e);
        }
    }

    async update(args) {
        try {
            let result = await getConnection()
                                .createQueryBuilder()
                                .update(Comida)
                                .set(args.comida)
                                .where('id = :id', { id: args.id })
                                .execute();
             
            let x = await this.repo.find({id: args.id});
            return x[0]
         } catch( e ) {
             console.log(e);
         }
    }

    async destroy(args: {id: number}) {
        try {
           let x = await this.repo.find({id: args.id});

           let result = await getConnection()
                                .createQueryBuilder()
                                .delete()
                                .from(Comida)
                                .where('id = :id', { id: args.id })
                                .execute();
            
            
            return x[0]
        } catch( e ) {
            console.log(e);
        }
    }
}

export default ComidaController;
