import {Request, Response} from 'express';
import {UserModel} from "../models/userModel";
import {AxiosResponse} from "axios";
import {UserDto} from "../DTO/user.dto";

export class UserController {

    private model : UserModel;

    constructor(model:UserModel) {
        this.model = model
    }

    getUser = async(req : Request, res : Response) => {
        const users = await this.model.getUsers()
            .then((response:AxiosResponse) => {return response.data})
        res.render('user', {users})
    }

    displayUser = async (req : Request, res : Response) => {
       const param = req.params.id;
        const user = await this.model.getUserById(param).then(response=>response.data);
        res.render('detail', {user})
    }

    CreateUser = async (req : Request, res : Response) => {
        res.render('createUser')
    }

    deleteUser = (req : Request, res : Response) => {
        const param = req.params.id;
        this.model.deleteUserById(param);
        res.redirect('/users')
    }

    addNewUser = (req : Request, res : Response) => {
        this.model.addNewUserModel();
        res.redirect('/users')
    }
}