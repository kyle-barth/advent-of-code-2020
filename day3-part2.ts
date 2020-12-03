const input: string = `paste input here`;
const _: string[] = input.split("\n");

const trekTheForest = (
  arr: string[],
  movement: { right: number; down: number }
) => {
  let total: number = 0;
  let charIndex: number = movement.right;
  let _: string;

  for (let i = movement.down; i < arr.length; i += movement.down) {
    const pos: number = charIndex % arr[i].length;

    if (arr[i].charAt(pos) == "#") {
      total++;
    }

    charIndex += movement.right;
  }

  return total;
};

console.log(
  trekTheForest(_, { right: 1, down: 1 }) *
    trekTheForest(_, { right: 3, down: 1 }) *
    trekTheForest(_, { right: 5, down: 1 }) *
    trekTheForest(_, { right: 7, down: 1 }) *
    trekTheForest(_, { right: 1, down: 2 })
);
