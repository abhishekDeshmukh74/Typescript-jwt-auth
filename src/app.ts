import * as express from 'express';

import { CONST } from './config/CONST';

import { InitMongoDB } from './config/mongoose';
import { InitMiddlewares } from './config/middlewares';

import { AuthRoute } from './route/AuthRoute';

import { UserRoute } from './route/UserRoute';

class App {

    public app: express.Application;
    public router: express.Router;

    constructor() {
        this.app = express();
        this.router = express.Router();
        this.configMiddlware();
        this.configRoute(this.router);
        this.startServer();
    }

    public configMiddlware(): void {
        new InitMongoDB(CONST.DATABASE.DB_URL);

        new InitMiddlewares(this.app);
    }

    public configRoute(router: express.Router): void {

        new AuthRoute(router);
        new UserRoute(router);

        this.app.use(router);

    }

    public startServer(): void {
        this.app.set(CONST.PORT, (process.env.PORT || CONST.PORT_VALUE));

        this.app.listen(this.app.get(CONST.PORT), () => {
            console.log((CONST.SERVER_START_TEXT), this.app.get(CONST.PORT), this.app.get('env'));
        });
    }
}

new App();