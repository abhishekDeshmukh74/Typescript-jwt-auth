import { genSalt, hash, compare } from 'bcryptjs';
import * as jwt from "jsonwebtoken";
import * as passport from 'passport';

import { NextFunction, Request, Response } from 'express';

import { CONST } from '../config/CONST';
import { default as UserModel } from '../model/UserModel';
import { IUser } from '../interfaces/IUser';

export class AuthController {

    constructor() { }

    private genToken(id: string): Object {

        return jwt.sign({
            userId: id
        }, 'lol', { expiresIn: '12h' });

    }

    public jwtAuthenticate(req: Request, res: Response) {

        const query = { username: req.body.username };

        UserModel.findOne(query, (err: Error, user: any) => {

            if (err) {
                res.status(CONST.STATUS.UNAUTHORIZED).send({ message1: CONST.AUTH_FAIL });
            }
            if (!user) {
                res.status(CONST.STATUS.UNAUTHORIZED).send({ message2: CONST.AUTH_FAIL });
            }

            compare(req.body.password, user.password, (err: Error, isMatch: any) => {
                if (err) {
                    res.status(CONST.STATUS.UNAUTHORIZED).send({ message3: CONST.AUTH_FAIL });
                }
                else if (isMatch) {
                    const token = this.genToken(user._id);
                    return res.status(CONST.STATUS.OK).send({
                        message: CONST.LOGIN_SUCCESS,
                        authorisedUser: user,
                        token,
                        tokenExpiresIn: Date.now() + 36000 * 12
                    });
                } else {
                    res.status(CONST.STATUS.UNAUTHORIZED).send({ message4: CONST.AUTH_FAIL });
                }
            });
        });
    }


    public ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

        const bearerHeader = req.headers.authorization;

        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];

            jwt.verify(bearerToken, 'lol', (error: any, decoded: any) => {

                if (error) {

                    if (error.name === 'TokenExpiredError') {
                        return res.status(CONST.STATUS.UNAUTHORIZED).send({
                            message: 'Authentication token has expired. Please generate a new one!'
                        });
                    }
                    console.log('Tokenerr ' + error);
                    return res.status(CONST.STATUS.UNAUTHORIZED).send({ message: CONST.AUTH_FAIL, error });
                }

                console.log('decToken ' + JSON.stringify(decoded));
                next();
            })

        } else {
            res.status(CONST.STATUS.UNAUTHORIZED).send({ message: 'No Authentication header is found' })
        }
    }
}
