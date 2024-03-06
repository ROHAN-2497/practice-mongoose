import express, { Application, NextFunction, Request, Response } from "express";
import { Schema, model, connect } from "mongoose";
import cors from "cors";

const app: Application = express();

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Using Cors
app.use(cors());
// route
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //   inserting a test data into mongodb
  // step1 :
  // interface
  // schema
  // model
  // database Query
  //   res.send("Hello World!");
  //   next()
  interface IUser {
    id: string;
    role: "Student";
    password: string;
    name: {
      firstName: "Rohan";
      middleName: "islam";
      lastName: "Fury";
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email: string;
    contactNumber: string;
    presentAddress: string;
    parmanentAddress: string;
  }
  const userSchema = new Schema<IUser>({
    id: { type: String, required: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    dateOfBirth: { type: String },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    email: { type: String, required: true },
    contactNumber: {
      type: String,
      required: true,
    },
    presentAddress: { type: String, required: true },
    parmanentAddress: { type: String, required: true },
  });
  const User = model<IUser>("User", userSchema);
});
export default app;
