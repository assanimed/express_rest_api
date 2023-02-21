import express from "express";
import dotenv from "dotenv";
import createError from "http-errors";
import ProductRoute from "./Routes/Product.js";
import initConnection from "./utils/initConnection.js";

import docs from "./docs/index.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);
// init MongoDB Database Connection
initConnection();

// Handle products routes
app.use("/products", ProductRoute);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(docs));

// handle 404 error
app.use((res, req, next) => next(createError.NotFound("Not Found")));

// error handeling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message || "Internal Server Error",
    },
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Runing on PORT ${PORT}`);
});
