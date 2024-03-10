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

export interface IUserMethods {
  fullName(): string;
}
