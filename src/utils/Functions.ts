import * as path from 'path';
export class Functions {

    public isJson(str: string): boolean {
        str = typeof str !== 'string' ? JSON.stringify(str) : str;
        try {
            str = JSON.parse(str);
        } catch (e) {
            return false;
        }

        if (typeof str === 'object' && str !== null) {
            return true;
        }
        return false;
    }

    public getAvg(array: number[]): number {
        let sum = 0;

        if (array.length === 0) {
            return 0;
        }

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return parseInt((sum / array.length).toFixed(1));
    }

    public getAuthorizationToken(headers) {
        if (headers && headers.authorization) {
            const parted = headers.authorization.split(' ');
            if (parted.length === 2) {
                return parted[1];
            } else {
                return null;
            }
        } else {
            return null;
        }
    };

    public checkFileType(file, cb) {
        // Allowed ext
        const filetypes = /jpeg|jpg|png|gif/;
        // Check ext
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        // Check mime
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Images Only!');
        }
    }
}