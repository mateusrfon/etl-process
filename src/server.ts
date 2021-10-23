import startServer from "./load";
import extractData from "./extractData";
import transformData from "./transformData";

extractData().then((extraction) => {
  const loadData = transformData(extraction);
  startServer(loadData);
});
