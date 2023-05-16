import { Team } from "../BoxScore/BoxScore";
import "./boxScoreContent.css";

interface BoxScoreContentProps {
  homeTeam: Team;
  awayTeam: Team;
  periods: string[];
  stats?: string[];
}

export const BoxScoreContent = ({
  homeTeam,
  awayTeam,
  periods,
  stats,
}: BoxScoreContentProps) => {
  return (
    <div className="box-score-content">
      <div className="name-group">
        <div className="name-header">
          <span className="text invisible">{awayTeam.abbreviation}</span>{" "}
        </div>
        <span className="text name">{awayTeam.abbreviation}</span>
        <span className="text name">{homeTeam.abbreviation}</span>
      </div>
      <div className="score-group">
        {periods.map((period, ind) => (
          <div className="period-group">
            <div className="period-group-header">
              <span className="text padded-text">{period}</span>
            </div>
            <div className="period-group-content">
              <span className="tex padded-textt">
                {awayTeam.scoreByPeriod[ind]}
              </span>
            </div>
            <div className="period-group-content">
              <span className="text padded-text">
                {homeTeam.scoreByPeriod[ind]}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="stat-group">
        {stats?.map((stat, ind) => (
          <div className="period-group">
            <div className="period-group-header">
              <span className="text padded-text">{stat}</span>
            </div>
            <div className="period-group-content">
              <span className="text padded-text">{awayTeam.stats?.[ind]}</span>
            </div>
            <div className="period-group-content">
              <span className="text padded-text">{homeTeam.stats?.[ind]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
