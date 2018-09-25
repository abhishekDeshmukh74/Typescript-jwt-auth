import * as express from 'express';
import * as path from 'path';
import * as bcrypt from 'bcryptjs';
import * as passport from 'passport';
import { Strategy, ExtractJwt } from "passport-jwt";
import { default as UserModel } from '../model/UserModel';

import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as compression from 'compression';


import { CONST } from './CONST';
export class InitMiddlewares {

    constructor(app: express.Application) {
        this.init(app);
    }

    public init(app: express.Application): void {

        app.use(compression());

        app.use((req, res, next) => {
            res.header(CONST.ACCESS_CONTROL_HEADERS.ALLOW_ORIGIN.NAME, CONST.ACCESS_CONTROL_HEADERS.ALLOW_ORIGIN.VALUE);
            res.header(CONST.ACCESS_CONTROL_HEADERS.ALLOW_METHODS.NAME, CONST.ACCESS_CONTROL_HEADERS.ALLOW_METHODS.VALUE);
            res.header(CONST.ACCESS_CONTROL_HEADERS.ALLOW_HEADERS.NAME, CONST.ACCESS_CONTROL_HEADERS.ALLOW_HEADERS.VALUE);
            next();
        });

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.enable("trust proxy");

        app.use(cors());

        // const options = {
        //     jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        //     secretOrKey: 'lol',
        //     passReqToCallback: true
        // };

        // passport.use(new Strategy(options, (jwt_payload, done) => {

        //     console.log('LOL1' + jwt_payload);

        //     const query = { username: jwt_payload.username };

        //     UserModel.findOne(query, (err: Error, user: any) => {

        //         if (err) {
        //             return done(err, false, { message: 'Error occurred' });
        //         }
        //         if (!user) {
        //             return done(null, false, { message: 'Unknown Username' });
        //         }
        //         if (jwt_payload.expiresIn <= Date.now()) {
        //             return done(null, false, { message: "Expired Token" });
        //         } else {
        //             bcrypt.compare(jwt_payload.password, user.password, (err: Error, isMatch: any) => {
        //                 if (err) {
        //                     return done(err, false, { message: 'Error occurred' });
        //                 }
        //                 if (isMatch) {
        //                     return done(null, user, { message: 'Authentication success!' });
        //                 } else {
        //                     return done(null, false, { message: 'Invalid password' });
        //                 }
        //             });
        //         }
        //     });
        // }))

        //app.use(passport.initialize());

        // passport.use("jwt", this.getStrategy());

        app.use(helmet());

        app.use(morgan(CONST.MORGAN_LOG_FORMAT));

    }
}