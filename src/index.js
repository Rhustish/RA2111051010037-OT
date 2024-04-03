import express from "express";
import dotenv from "dotenv";
import morgan from "morgan"

import appRouter from "./Router/appRouter.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(morgan("common"));
app.use(appRouter);


app.listen(process.env.PORTNO || 4000,()=>{
    console.log(`Listening on port ${process.env.PORTNO || 4000}`)
})