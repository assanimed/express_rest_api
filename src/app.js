import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import createError from "http-errors";

dotenv.config();

import ProductRoute from "./Routes/Product.js";

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

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
app.use("/products", ProductRoute);

app.use((res, req, next) => next(createError.NotFound("Not Found")));

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message || "Internal Server Error",
    },
  });
});

app.listen(5000, () => {
  console.log("Server Runing on PORT 5000");
});
