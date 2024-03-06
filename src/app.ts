import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

//Application Routes
import userRoute from "./app/modules/user/user.route";

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Using Cors
app.use(cors());
// route
app.use("/app/v1/user", userRoute);

export default app;
