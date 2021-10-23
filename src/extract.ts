import axios from "axios";

interface ChallengeData {
  numbers: number[];
}

async function extract(): Promise<number[]> {
  try {
    let data = true;
    let i = 1;
    let extraction: number[] = [];

    while (data) {
      console.log(i);
      const request = await axios.get(
        `http://challenge.dienekes.com.br/api/numbers?page=${i}`
      );
      const { numbers } = request.data as ChallengeData;
      if (numbers === [] || numbers === null) {
        console.log(numbers);
        data = false;
      } else {
        numbers.forEach((number) => extraction.push(number));
      }
      i++;
    }
    console.log(extraction.length);
    return extraction;
  } catch (err) {
    console.error(err.response.data.error);
  }
}

export default extract;
