import { useQuery } from "@tanstack/react-query";
import { getStats } from "../../api";
import { leagueConfigs, Leagues } from "../../config/leagueConfigs";
import { Card } from "../common";
import { CardHeader } from "../common/CardHeader";
import "./boxScore.css";

interface BoxScoreProps {
  league: Leagues;
}

export const BoxScore = ({ league }: BoxScoreProps) => {
  const { data, isLoading } = useQuery<any>(
    ["stats", league],
    async () => {
      console.log("HRERE");
      return await getStats(league);
    },
    {
      select: (data) => data.stats,
    }
  );
  console.log("data:", data);

  // ["stats", league], getStats(league));

  const leagueConfig = leagueConfigs[league];
  console.log("leagueConfig:", leagueConfig);

  return (
    <Card>
      <CardHeader
        periods={data.home_period_scores.map(
          (_: any, ind: number) => `${ind + 1}`
        )}
      />
    </Card>
  );
};
