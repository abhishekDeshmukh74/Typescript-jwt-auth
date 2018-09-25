import * as crypto from 'crypto';
import { hash, genSalt, compare } from 'bcryptjs';
import { Request, Response } from 'express';
import { waterfall } from 'async';


import { CONST } from '../config/CONST';
import { Functions } from '../utils/Functions';
import { default as UserModel } from '../model/UserModel';
import { IUser } from '../interfaces/IUser';

export class UserController {

    private functionsObj: Functions;

    constructor() {
        this.functionsObj = this.functionsObj;
    }

}