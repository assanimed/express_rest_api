import mongoose from "mongoose";

const initConnection = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGODB_URL, {
      dbName: "reststore",
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
