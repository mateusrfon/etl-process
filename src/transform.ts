function transform(data: number[]): number[] {
  console.log("Transforming data...");

  for (let i = 1; i < data.length; i++) {
    let onCheck = data[i];
    for (let j = i - 1; j >= 0; j--) {
      const previous = data[j];
      if (onCheck < previous) {
        data[j] = onCheck;
        data[j + 1] = previous;
      } else {
        break;
      }
    }
  }
  return data;
}

export default transform;
