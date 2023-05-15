export type Leagues = "mlb" | "nba";

type LeagueConfigs = {
  [k in Leagues]: {
    // After maxPeriod the box score will show OT, else will continue counting up
    maxPeriod?: number;
    stats?: {
      [k: string]: {
        label: string;
        homeValue: (data: any) => number;
        awayValue: (data: any) => number;
      };
    };
  };
};

// leagueConfigs can be extended to include future leagues
export const leagueConfigs: LeagueConfigs = {
  mlb: {
    stats: {
      runs: {
        label: "R",
        homeValue: (data: any) =>
          data.home_period_scores.reduce(
            (acc: number, curr: number) => acc + curr,
            0
          ),
        awayValue: (data: any) =>
          data.away_period_scores.reduce(
            (acc: number, curr: number) => acc + curr,
            0
          ),
      },
      hits: {
        label: "H",
        homeValue: (data: any) =>
          data.home_batters.reduce(
            (acc: any, curr: number) => acc.hits + curr,
            0
          ),
        awayValue: (data: any) =>
          data.away_batters.reduce(
            (acc: any, curr: number) => acc.hits + curr,
            0
          ),
      },
      errors: {
        label: "E",
        homeValue: (data: any) => data.home_errors,
        awayValue: (data: any) => data.away_errors,
      },
    },
  },
  nba: { maxPeriod: 4 },
};
