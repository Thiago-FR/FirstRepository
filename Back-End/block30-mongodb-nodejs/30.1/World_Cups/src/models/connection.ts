import mongoose, { mongo } from 'mongoose';

const connection = (mongoDataBseURI = 'mongodb://localhost:/world_cups') => {
  mongoose.connect(mongoDataBseURI);
};

export default connection;
