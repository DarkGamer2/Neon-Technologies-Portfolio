import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config();

app.listen(process.env.PORT);
