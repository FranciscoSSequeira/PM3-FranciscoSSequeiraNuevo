import express from "express";
import cors from "cors";
import morgan from "morgan";
import indexRouter from "./routers/indexRouter";
require("dotenv").config()

const PORT = process.env.PORT || 3000

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

server.use(indexRouter);

export default server;