import express from "express";
import cors from "cors";

const port = 4000;

function startServer(data: number[]) {
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

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
}

export default startServer;
