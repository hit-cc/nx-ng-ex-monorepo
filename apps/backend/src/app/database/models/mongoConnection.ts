import mongoose from 'mongoose';

class MongoDbConnection {
  async connect(mongoURI: string) {
    try {
      await mongoose.connect(mongoURI, {});
      console.log('Connected to MongoDB....');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
}

export default MongoDbConnection;
