const input: string = `paste input here`;
const _: number[] = input.split("\n").map((x) => Number(x));

const magicMultiplier = (arr: number[], num: number) => {
  let result: number = 0;

  arr.some((first) => {
    arr.some((second) => {
      first + second === num ? (result = first * second) : false;
    });

    return result;
  });

  return result;
};

console.log(magicMultiplier(_, 2020));
