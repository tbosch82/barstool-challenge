import { Leagues } from "../config/leagueConfigs";

export const getStats = async (league: Leagues) => {
  console.log("HERE");
  return await (
    await fetch(`http://localhost:3000/stats?sport=${league}`)
  ).json();
};
