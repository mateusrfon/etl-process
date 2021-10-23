import app from "./app";
import extract from "./extract";
//extract -> transform -> load(api)
const port = +process.env.PORT || 4000;

extract().then((extraction) => console.log(extraction));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
