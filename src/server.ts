import load from "./load";
import extract from "./extract";
import transform from "./transform";

const port = 4000;

extract().then((extraction) => {
  const loadData = transform(extraction);
  const app = load(loadData);

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
});
