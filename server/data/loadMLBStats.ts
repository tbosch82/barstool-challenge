import fetch from "node-fetch";
import { STATS_API_ROOT, MLB_ENDPOINT } from "../config";

export const loadMLBStats = async () => {
  try {
    return (await fetch(`${STATS_API_ROOT}${MLB_ENDPOINT}`)).json();
  } catch (err) {
    console.error("Failed to fetch MLB stats.", err);
  }
};
