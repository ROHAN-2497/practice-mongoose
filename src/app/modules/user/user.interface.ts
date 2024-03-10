import { Model } from "mongoose";

export interface IUser {
  id: string;
  role: "Student";
  name: {
    firstName: "Rohan";
    middleName: "islam";
    lastName: "Fury";
  };
  password: string;
  dateOfBirth?: string;
  gender: "male" | "female";
  email: string;
  contactNumber: string;
  presentAddress: string;
  parmanentAddress: string;
}

// Statics Methods
interface UserModel extends Model<IUser> {
  getAdminMethods(): IUser[];
}

// interface methods
export interface IUserMethods {
  fullName(): string;
}
