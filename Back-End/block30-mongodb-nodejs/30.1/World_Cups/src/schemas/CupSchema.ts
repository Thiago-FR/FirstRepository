import { Schema } from "mongoose";

export interface ICup {
  year: number,
  hostCountry: string,
  champions: string,
  runnerUp: string,
  editionStrikers: string[],
  bestPlayer: string,
  bestYoungPlayer: string,
}

export const CupSchema = new Schema<ICup>({
  year: { type: Number, required: true },
  hostCountry: { type: String, required: true },
  champions: { type: String, required: true },
  runnerUp: { type: String, required: true },
  editionStrikers: { type: [String], required: true },
  bestPlayer: { type: String, required: true },
  bestYoungPlayer: { type: String, required: true },
}, {
  versionKey: false}
)