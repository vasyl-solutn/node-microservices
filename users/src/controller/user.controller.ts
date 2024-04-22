import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {User} from "../entity/user.entity";

export const Users = async (req: Request, res: Response) => {
    res.send(await getRepository(User).find());
}

export const Testing = async (req: Request, res: Response) => {
    res.send({ message: 'ok', version: '1.0.2' });
}

export const GetUser = async (req: Request, res: Response) => {
    res.send(await getRepository(User).findOne(req.params.id));
}
