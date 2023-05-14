import fetch from "node-fetch";
import { STATS_API_ROOT, NBA_ENDPOINT } from "../config";

export const loadNBAStats = async () => {
  try {
    return (await fetch(`${STATS_API_ROOT}${NBA_ENDPOINT}`)).json();
  } catch (err) {
    console.error("Failed to fetch NBA stats.", err);
  }
};
