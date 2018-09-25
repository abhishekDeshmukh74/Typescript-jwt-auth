import { Schema, model } from 'mongoose';

import { IUser } from '../interfaces/IUser';
import { CONST } from '../config/CONST';

const userSchema: Schema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    resetPasswordToken: {
        type: String,
        default: undefined
    },
    resetPasswordExpires: {
        type: Date,
        default: undefined
    },
    title: {
        type: String
    },
    orgName: {
        type: String
    },
    cfpn: {
        type: String
    },
    cfan: {
        type: String
    },
    ciman: {
        type: String
    },
    finProf: {
        type: Boolean
    },
    regRep: {
        type: Boolean
    },
    uStatus: {
        type: String,
        enum: [CONST.ENUM.ACTIVE, CONST.ENUM.BLOCKED],
        default: CONST.ENUM.ACTIVE,
    },
    uRole: {
        type: String,
        required: true,
        enum: [CONST.ENUM.USER, CONST.ENUM.ADMIN],
        default: CONST.ENUM.USER
    },
    linkedinId: {
        type: String,
        default: undefined
    },
    verifyToken: {
        type: String,
        default: undefined
    },
    verifyTokenExpires: {
        type: Date,
        default: undefined
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isRegisterationCompleteForLIUser: {
        type: Boolean,
        default: true
    }
}, {
        collection: CONST.DATABASE_COLLECTIONS.User,
        timestamps: {
            createdAt: CONST.CREATED_AT,
            updatedAt: CONST.UPDATED_AT
        }
    });

export default model<IUser>(CONST.MODEL.USER, userSchema);