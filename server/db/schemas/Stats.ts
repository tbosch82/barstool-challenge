import { model, Schema } from "mongoose";
import { SPORTS } from "../../config";

const statsSchema = new Schema(
  {
    stats: Schema.Types.Mixed,
    sport: {
      type: String,
      enum: SPORTS,
    },
  },
  { timestamps: true }
);

export const Stats = model("Stats", statsSchema);
