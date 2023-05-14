import { Express } from "express";
import { getStats } from "./getStats";

export const initEndpoints = (app: Express) => {
  app.get("/stats", getStats);
};
