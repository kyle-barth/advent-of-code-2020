const input: string = `paste input here`;
const _: number[] = input.split("\n").map((x) => Number(x));

const magicMultiplier = (arr: number[], num: number) => {
  let result: number = 0;

  arr.some((first) => {
    arr.some((second) => {
      arr.some((third) =>
        first + second + third === num
          ? (result = first * second * third)
          : false
      );

      return result;
    });

    return result;
  });

  return result;
};

console.log(magicMultiplier(_, 2020));
