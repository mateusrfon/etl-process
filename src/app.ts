import "./setup";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

//app.get("/categories", categoriesController.get);

export default app;