import "./cardHeader.css";

interface CardHeaderProps {
  periods: string[];
  stats?: string[];
}

export const CardHeader = ({ periods, stats }: CardHeaderProps) => {
  return (
    <div className="card-header">
      <div className="spacer" />
      {periods.map((period) => (
        <span className="text">{period}</span>
      ))}
      {stats?.map((stat) => (
        <span className="text">{stat}</span>
      ))}
    </div>
  );
};
