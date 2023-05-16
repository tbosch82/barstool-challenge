export type Leagues = "mlb" | "nba";

type LeagueConfigs = {
  [k in Leagues]: {
    // After maxPeriod the box score will show OT, else will continue counting up
    maxPeriod?: number;
    stats?: {
      [k: string]: {
        label: string;
        homeValue: (data: any) => string;
        awayValue: (data: any) => string;
      };
    };
  };
};

// leagueConfigs can be extended to include additional leagues
export const leagueConfigs: LeagueConfigs = {
  mlb: {
    stats: {
      runs: {
        label: "R",
        homeValue: (data: any) => `${data.home_batter_totals.runs ?? "-"}`,
        awayValue: (data: any) => `${data.away_batter_totals.runs ?? "-"}`,
      },
      hits: {
        label: "H",
        homeValue: (data: any) => `${data.home_batter_totals.hits ?? "-"}`,
        awayValue: (data: any) => `${data.away_batter_totals.hits ?? "-"}`,
      },
      errors: {
        label: "E",
        homeValue: (data: any) => data.home_errors ?? "-",
        awayValue: (data: any) => data.away_errors ?? "-",
      },
    },
  },
  nba: {
    maxPeriod: 4,
    stats: {
      total: {
        label: "T",
        homeValue: (data: any) => `${data.home_totals.points ?? "-"}`,
        awayValue: (data: any) => `${data.away_totals.points ?? "-"}`,
      },
    },
  },
};
