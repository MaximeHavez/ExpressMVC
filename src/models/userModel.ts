import 'dotenv/config';
import {AxiosError, AxiosResponse} from "axios";
import axios from "axios";
import {UserDto} from "../DTO/user.dto";



export class UserModel {

    private uri: string;

    constructor(uri:string) {
        this.uri = uri
    }

    getUsers = () => {
        return axios.get(this.uri)

    }

    getUserById = (id:string) => {
        return axios.get(`${this.uri}/${id}`)
    }

    deleteUserById = (id:string) => {
        axios.delete(`${this.uri}/${id}`)
    }

    addNewUserModel = () => {
        axios.post(`${this.uri}`)
    }

}