import axios from "axios";

interface ChallengeData {
  numbers: number[];
}

async function extract(): Promise<number[]> {
  console.log("Extracting data...");

  let data = true;
  let i = 1;
  let extraction: number[] = [];

  while (data) {
    let error = false;
    await axios
      .get<ChallengeData>(
        `http://challenge.dienekes.com.br/api/numbers?page=${i}`
      )
      .then((res) => {
        const { numbers } = res.data;
        if (numbers.length === 0) {
          data = false;
        } else {
          numbers.forEach((number) => extraction.push(number));
        }
      })
      .catch((err) => {
        console.error(err.response.data.error);
        error = true;
      });
    if (error) continue;
    i++;
  }

  return extraction;
}

export default extract;
