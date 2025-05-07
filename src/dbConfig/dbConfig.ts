import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI! || 'mongodb://localhost:27017/nextAuth');
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDb connected successfully!");
    });

    connection.on("error", (error) => {
      console.log("MongoDb connection error !", error);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong in connecting to Db.");
    console.log(error);
  }
}
