import express from "express";
import { PORT } from "../config";
import { initEndpoints } from "./endpoints";

const app = express();

export const initApi = () => {
  initEndpoints(app);

  app.listen(PORT, () => {
    console.log(`Stats API listening on port ${PORT}`);
  });
};
