import mongoose from 'mongoose';

class MongoDBConnection {
  static connect() {
    throw new Error('Method not implemented.');
  }
  private mongoURI: string;

  constructor() {
    this.mongoURI =
      'mongodb+srv://cccmongodb:ccc1_mongodb@cc-cluster.tyb3i.mongodb.net/nx_ng_ex_monorepo'; // Update with your MongoDB URI
  }

  async connect() {
    try {
      await mongoose.connect(this.mongoURI, {
        // useNewUrlParser: false,
        // useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
}

export default MongoDBConnection;
