import * as mongoose from "mongoose";
import {Record} from "./record.interface";

const recordSchema = new mongoose.Schema(
  {
    key: {
      type: String,
    },
    value: {
      type: String,
    },
    counts: {
      type: Array,
      items: { type: Number },
    },
    createdAt: {
      type: Date,
    },
  },
  { id: false,timestamps: false }
);

const recordModel = mongoose.model<Record & mongoose.Document>(
  "Record",
  recordSchema
);

export default recordModel;
