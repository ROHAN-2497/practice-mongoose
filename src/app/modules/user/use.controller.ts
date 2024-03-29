import { Response, Request, NextFunction } from "express";
import {
  createUserToDb,
  getAdminUsersFromDb,
  getUserByIdFromDb,
  getUsersFromDb,
} from "./user.service";
import User from "./user.model";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDb(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getUsersFromDb();
  res.status(200).json({
    status: "success",
    data: users,
  });
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = await getUserByIdFromDb(id);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getAdminUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getAdminUsersFromDb();
  res.status(200).json({
    status: "success",
    data: User,
  });
};
