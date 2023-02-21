import express from "express";
import dotenv from "dotenv";
import createError from "http-errors";
import ProductRoute from "./Routes/Product.js";
import initConnection from "./utils/initConnection.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

initConnection();

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
