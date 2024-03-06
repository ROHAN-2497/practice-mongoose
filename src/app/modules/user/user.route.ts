import express from "express";
import { createUser } from "./use.controller";

const router = express.Router();
router.get("/", createUser);
