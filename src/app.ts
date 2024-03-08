import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

//Application Routes
import userRoutes from "./app/modules/user/user.route";

//Using Cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route
app.use("/app/v1/user", userRoutes);

export default app;
