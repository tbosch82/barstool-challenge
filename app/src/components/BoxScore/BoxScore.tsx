import { useQuery } from "@tanstack/react-query";
import { getStats } from "../../api";
import { leagueConfigs, Leagues } from "../../config/leagueConfigs";
import { BoxScoreContent } from "../BoxScoreContent";
import "./boxScore.css";
import { BoxScoreFooter } from "../BoxScoreFooter";

export interface Team {
  name: string;
  abbreviation: string;
  scoreByPeriod: string[];
  stats?: string[];
}
interface BoxScoreProps {
  league: Leagues;
}

export const BoxScore = ({ league }: BoxScoreProps) => {
  const { data } = useQuery<any>(["stats", league], () => getStats(league), {
    select: (data) => data.stats,
  });

  if (!data)
    return (
      <div className="card">
        <span>No Data</span>
      </div>
    );

  const leagueConfig = leagueConfigs[league];

  const leagueStatHeaders = Object.values(leagueConfig.stats ?? {}).map(
    (s) => s.label
  );

  const homeTeamData: Team = {
    name: data.home_team.last_name,
    abbreviation: data.home_team.abbreviation,
    scoreByPeriod: (data.home_period_scores as number[]).map((s) =>
      s !== undefined ? `${s}` : "-"
    ),
    stats: Object.values(leagueConfig.stats ?? {}).map((s) =>
      s.homeValue(data)
    ),
  };
  const awayTeamData: Team = {
    name: data.away_team.last_name,
    abbreviation: data.away_team.abbreviation,
    scoreByPeriod: (data.away_period_scores as number[]).map((s) =>
      s !== undefined ? `${s}` : "-"
    ),
    stats: Object.values(leagueConfig.stats ?? {}).map((s) =>
      s.awayValue(data)
    ),
  };

  return (
    <div className="box-score">
      <BoxScoreContent
        homeTeam={homeTeamData}
        awayTeam={awayTeamData}
        periods={data.home_period_scores.map(
          (_: any, ind: number) => `${ind + 1}`
        )}
        stats={leagueStatHeaders}
      />
      <BoxScoreFooter
        homeTeamName={homeTeamData.name}
        awayTeamName={awayTeamData.name}
        eventStatus={data.event_information.status}
      />
    </div>
  );
};
