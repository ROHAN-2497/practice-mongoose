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
app.get("/", (req: Request, res: Response, next: NextFunction) => {});
//   inserting a test data into mongodb
// step1 :
// interface
// schema
// model
// database Query
//   res.send("Hello World!");
//   next()

// creating schema using interface

export default app;
