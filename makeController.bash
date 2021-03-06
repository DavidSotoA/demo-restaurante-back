#!/bin/bash

S="$(echo ${1:0:1} | tr '[A-Z]' '[a-z]')$(echo ${1:1})"

echo "import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import Model from './ModelInterface';

@Entity()
export default class $1 implements Model {

    @PrimaryGeneratedColumn()
    id: number

    public toString() {
        return '$1'
    }

    public get_grapQl_type(): string {
        return 'type $1 {}'
    }

    public get_grapQl_input(): string {
        return 'input $1Input {}'
    }

}" > ./src/models/$1.ts

echo "import { Request, Response } from 'express';
import Controller from './ControllerInterface';
import {getManager, getConnection} from 'typeorm';
import $1 from '../models/$1';

class $1Controller implements Controller {

    private repo;

    constructor() {
        this.repo = getManager().getRepository($1);

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
                            .into($1)
                            .values([
                                args.$S
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
                                .update($1)
                                .set(args.$S)
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
                                .from($1)
                                .where('id = :id', { id: args.id })
                                .execute();
            
            
            return x[0]
        } catch( e ) {
            console.log(e);
        }
    }
}

export default $1Controller;" > ./src/controllers/$1Controller.ts;

