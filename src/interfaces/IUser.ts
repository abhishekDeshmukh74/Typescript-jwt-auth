import { Document } from 'mongoose';

export interface IUser extends Document {

    fName: string;
    lName: string;
    email: string;
    username: string;
    password: string;
    resetPasswordToken?: string;
    resetPasswordExpires?: number;
    title: string;
    orgName: string;
    cfpn: string;
    cfan: string;
    ciman: string;
    finProf: boolean;
    regRep: boolean;
    uStatus: string;
    uRole: string;
    oldPassword?: string;
    newPassword?: string;
    linkedinId?: string;
    verifyToken?: string;
    verifyTokenExpires?: string;
    isVerified?: boolean;
}