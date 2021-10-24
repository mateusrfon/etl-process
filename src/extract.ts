import axios from "axios";

interface ChallengeData {
  numbers: number[];
}

async function extractData(): Promise<number[]> {
  console.log("Extracting data...");

  let remainingData = true;
  let i = 1;
  let extraction: number[] = [];

  while (remainingData) {
    let error = false;

    await axios
      .get<ChallengeData>(
        `http://challenge.dienekes.com.br/api/numbers?page=${i}`
      )
      .then((res) => {
        const { numbers } = res.data;
        if (numbers.length === 0) {
          remainingData = false;
        } else {
          numbers.forEach((number) => extraction.push(number));
        }
      })
      .catch(() => {
        error = true;
      });
    if (error) continue;
    i++;
  }

  return extraction;
}

export default extractData;
