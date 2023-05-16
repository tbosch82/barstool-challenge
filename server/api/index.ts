import express from "express";
import cors from "cors";
import { PORT } from "../config";
import { initEndpoints } from "./endpoints";

const app = express();

export const initApi = () => {
  app.use(cors());

  initEndpoints(app);

  app.listen(PORT, () => {
    console.log(`Stats API listening on port ${PORT}`);
  });
};
