import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Using Cors
app.use(cors());
// route
app.get("/");

export default app;
