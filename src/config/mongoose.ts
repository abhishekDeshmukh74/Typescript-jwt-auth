import { CONST } from './CONST';

import { Connection, connection, connect, set } from 'mongoose';

export class InitMongoDB {

    constructor(dbUrl: string) {
        connect(dbUrl, { useNewUrlParser: true });
        set('useCreateIndex', true);
        const db: Connection = connection;
        db.on(CONST.DATABASE.DB_ERROR, (err) => {
            console.log(CONST.DATABASE.DB_CONNECT_FAILURE_MESSAGE + err);
            process.exit(1);
        });
        db.once(CONST.DATABASE.DB_OPEN, () => {
            console.log(CONST.DATABASE.DB_CONNECT_SUCCESS);
        });
    }
}