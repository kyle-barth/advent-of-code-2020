const input: string = `paste input here`;
const _: string[] = input.split("\n");

const trekTheForest = (arr: string[]) => {
  let total: number = 0;

  const rowLen: number = arr[0].length;
  let charIndex: number = 0;

  let _: string;

  arr.forEach((value, i) => {
    _ = value;

    if (i > 0) {
      charIndex += 3;

      if (charIndex > rowLen) {
        _ = value.repeat(Math.ceil(charIndex / rowLen) + 1);
      }

      if (_.charAt(charIndex) === "#") {
        total++;
      }
    }
  });

  return total;
};

console.log(trekTheForest(_));
