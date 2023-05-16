import { DB_HOST, DB_DATABASE, DB_PORT, DB_USER, DB_PASS } from "../config";
import mongoose from "mongoose";

export const connect = async () => {
  await mongoose.connect(`${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, {
    user: DB_USER,
    pass: DB_PASS,
  });
};
