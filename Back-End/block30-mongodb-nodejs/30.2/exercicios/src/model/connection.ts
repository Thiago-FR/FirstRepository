import mongoose from 'mongoose';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || 'mongodb://localhost:/TrybeStore',
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
