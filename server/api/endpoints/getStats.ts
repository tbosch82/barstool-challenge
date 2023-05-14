import { Stats } from "../../db/schemas";
import { Request, Response } from "express";
import { SPORTS, STATS_EXPIRATION } from "../../config";
import { loadMLBStats, loadNBAStats } from "../../data";

interface GetStatsQueryParams {
  sport?: "MLB" | "NBA";
}

export const getStats = async (
  req: Request<any, any, any, GetStatsQueryParams>,
  res: Response
) => {
  const { sport: qSport } = req.query;
  if (!qSport) {
    res.status(400).send("A sport is required.");
    return;
  }

  const sport = qSport.toUpperCase();

  if (!SPORTS.includes(sport)) {
    res.status(400).send("Invalid sport.");
    return;
  }

  let stats = await Stats.findOne({ sport });

  if (
    !stats ||
    new Date().getTime() - new Date(stats.updatedAt).getTime() >=
      STATS_EXPIRATION
  ) {
    let newStats = {};
    switch (sport) {
      case "MLB": {
        newStats = await loadMLBStats();
        break;
      }
      case "NBA": {
        newStats = await loadNBAStats();
        break;
      }
      default:
        break;
    }

    stats = await Stats.findOneAndUpdate(
      { sport },
      { stats: newStats },
      { returnOriginal: false, upsert: true }
    );
  }

  res.send(stats);
};
