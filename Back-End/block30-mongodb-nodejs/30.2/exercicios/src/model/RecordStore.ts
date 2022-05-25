import { model as createModel, Schema, Document } from "mongoose";
import RecordStore from '../interface/RecordStore';
import MongoModel from "./MongoModel";

interface RecordStoreDocument extends RecordStore, Document { };

const recordStoreSchema = new Schema<RecordStoreDocument>({
  artist: String,
  title: String,
  format: String,
  yearPublished: Number,
  new: Boolean,
});

export default class RecordStoreModel extends MongoModel<RecordStore> {
  constructor(mode = createModel('recordstores', recordStoreSchema)) {
    super(mode);    
  }
};
