import app from "./app";
import extract from "./extract";
import transform from "./transform";
//extract -> transform -> load(api)
const port = 4000;

extract().then((extraction) => {
  const data = transform(extraction); //passar data para o load
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
});
