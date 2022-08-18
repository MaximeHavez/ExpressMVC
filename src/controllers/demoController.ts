import { Request, Response } from 'express';
import { DemoModel } from '../models/demoModels';

export class DemoController {

    private model : DemoModel;

    constructor(model:DemoModel) {
        this.model = model
    }

    getString = (req : Request, res : Response) => {
        const data = this.model.goToController();
        res.render('demo', {data})
    }

    postString = (req : Request, res : Response) => {
        console.log(req.body);
        res.send(req.body)
    }

    getPage = (req : Request, res : Response) => {
        res.render('pages')
    }

    getTest = (req : Request, res : Response) => {
        res.render('test')
    }




}