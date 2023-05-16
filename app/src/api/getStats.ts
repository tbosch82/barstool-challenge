import { API_ENDPOINT, API_ROOT } from "../config/constants";
import { Leagues } from "../config/leagueConfigs";

export const getStats = async (league: Leagues) => {
  return await (
    await fetch(`${API_ROOT}/${API_ENDPOINT}?sport=${league}`)
  ).json();
};
