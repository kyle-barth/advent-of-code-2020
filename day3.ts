const input: string = `paste input here`;
const _: string[] = input.split("\n");

const trekTheForest = (arr: string[]) => {
  let total: number = 0;
  let charIndex: number = 3;

  for (let i = 1; i < arr.length; i += 1) {
    const pos: number = charIndex % arr[i].length;

    if (arr[i].charAt(pos) == "#") {
      total++;
    }

    charIndex += 3;
  }

  return total;
};

console.log(trekTheForest(_));
