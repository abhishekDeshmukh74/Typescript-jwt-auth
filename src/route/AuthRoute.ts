import { Request, Response, Router } from 'express';
import * as passport from 'passport';

import { CONST } from '../config/CONST';
import { AuthController } from '../controller/AuthController';

export class AuthRoute {

    private authControllerObj: AuthController;

    constructor(router: Router) {
        this.authControllerObj = new AuthController();
        this.init(router); 
    }

    public init(router: Router): void {

        router.post(CONST.ENDPOINT.AUTH.LOGIN, (req: Request, res: Response) => {
            this.authControllerObj.jwtAuthenticate(req, res);
        });

    }
}