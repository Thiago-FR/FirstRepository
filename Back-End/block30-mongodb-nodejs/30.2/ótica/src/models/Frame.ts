import { model as createModel, Schema, Document } from "mongoose";
import Frame from "../interfaces/Frame";
import MongoModel from "./MongoModel";

interface FrameDocument extends Frame, Document { };

const frameSchema = new Schema<FrameDocument>({
    material: String,
    color: String,
});

export default class FrameModel extends MongoModel<Frame> {
  constructor(model = createModel('Armacoes', frameSchema)) {
    super(model);
  }
}