#!/bin/bash

echo "import { Request, Response } from 'express';
import Controller from './ControllerInterface';
import {getManager} from 'typeorm';
import $1 from '../models/$1';
require('dotenv').config();

class $1Controller implements Controller {

    private repo;
    private url;

    constructor() {
        this.repo = getManager().getRepository($1);

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

    }

    async show(req: Request, res: Response) {
 
    }

    async store(req: Request, res: Response) {

    }

    async update(req: Request, res: Response) {

    }

    async destroy(req: Request, res: Response) {

    }
}

export default $1Controller;" > ./src/controllers/$1Controller.ts;


echo "import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class $1 {

    @PrimaryGeneratedColumn()
    id :number

}" > ./src/models/$1.ts