import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3005;

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/danile", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// routes
app.get("/", (req, res) => {
  res.send("server is good to go!");
});

app.use(express.json());
app.use(express.urlencoded());
app.use("/api/users", userRouter);

app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

app.listen(port, () => {
  console.log(`app is live on http://localhost:${port}`);
});
