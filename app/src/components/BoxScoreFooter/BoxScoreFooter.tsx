import "./boxScoreFooter.css";

interface BoxScoreFooterProps {
  homeTeamName: string;
  awayTeamName: string;
  eventStatus: string;
}

export const BoxScoreFooter = ({
  homeTeamName,
  awayTeamName,
  eventStatus,
}: BoxScoreFooterProps) => {
  const eventStatusString = eventStatus === "completed" ? "FINAL" : eventStatus;

  return (
    <div className="box-score-footer">
      <div className="footer-name-wrapper right-border">
        <span className="footer-name">{awayTeamName}</span>
      </div>
      {/* TODO: Enhancement could be made here to modify the status string to customize the game status display  */}
      <div className="footer-status-wrapper">
        <span>{eventStatusString}</span>
      </div>
      <div className="footer-name-wrapper left-border">
        <span className="footer-name">{homeTeamName}</span>
      </div>
    </div>
  );
};
