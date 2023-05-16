import { BoxScore } from "../../components";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <BoxScore league="mlb" />
      <BoxScore league="nba" />
    </div>
  );
};
