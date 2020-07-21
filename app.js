import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieparser from "cookie-parser";
import bodyparser from "body-parser";
import { userRouter } from "./router";
const app = express();

const handleHome = (req, res) => {
  res.send("Hello from home");
};

const handleProfile = (req, res) => {
  res.send("Its new page");
};

const betweenHome = (req, res, next) => {
  console.log("Hey betwwen");
  next();
};

app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// app.get("/", handleHome);
app.get("/profile", handleProfile);

app.use("/", userRouter);

export default app;
