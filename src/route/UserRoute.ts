import { Request, Response, Router } from 'express';

import { CONST } from '../config/CONST';
import { UserController } from '../controller/UserController';
import { AuthController } from '../controller/AuthController';

export class UserRoute {

    private userControllerObj: UserController;
    private authControllerObj: AuthController;

    constructor(router: Router) {

        this.userControllerObj = new UserController();
        this.authControllerObj = new AuthController();

        this.init(router);
    }

    public init(router: Router): void {

        router.get('/test', this.authControllerObj.ensureAuthenticated, (req: Request, res: Response) => {
            res.status(200).send({ data: 'data' })
        });
    }
}