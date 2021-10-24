import express from "express";
import cors from "cors";

function load(data: number[]) {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get("/load", (req, res) => {
    try {
      res.send(data);
    } catch (err) {
      console.error(err.data);
    }
  });

  return app;
}

export default load;
