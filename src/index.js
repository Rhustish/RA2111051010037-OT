import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(express.json());


app.listen(process.env.PORTNO || 4000,()=>{
    console.log("Listening on port 4000")
})