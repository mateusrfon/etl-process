import "./setup";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/load", (req, res) => {
  //res.send(data);
});

export default app;
