import mongoose from 'mongoose';

const connectToDatabase = (
  mongoDatavbaseURI = process.env.MONGO_URI
    || 'mongodb://localhost:/GlassesTrybe',
) => mongoose.connect(mongoDatavbaseURI);
  
export default connectToDatabase;