import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const initConnection = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGODB_URL, {
      dbName: process.env.dbName,
      user: process.env.dbUser,
      pass: process.env.dbPass,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch(() => console.log("MongoDB Connection Fail"));

  mongoose.connection.on("connected", () => {
    console.log("Mongoose Connecte to mongoDB");
  });

  mongoose.connection.on("error", (error) => {
    console.log("Mongoose Connection  Error ->");
    console.log(error);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose Disconnected");
  });

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log("Mogoose Connection Closed");
      process.exit(0);
    });
  });
};

export default initConnection;
