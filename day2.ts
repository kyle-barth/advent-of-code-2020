const input: string = `[paste input here]`;
const _: string[] = input.split("\n");

const validPwds = (arr: string[]) => {
  let _pwds: number = 0;

  arr.forEach((value: string) => {
    const min: number = Number(value.substring(0, value.indexOf("-")));
    const max: number = Number(
      value.substring(value.indexOf("-") + 1, value.indexOf(" "))
    );

    const letter: string = value.substring(
      value.indexOf(" ") + 1,
      value.indexOf(":")
    );
    const pwd: string = value.substring(value.indexOf(": ") + 1, value.length);

    const _ = Array.from(pwd);
    const occurrences: number = _.filter((x) => x === letter).length;

    if (occurrences >= min && occurrences <= max) {
      _pwds++;
    }
  });

  return _pwds;
};

console.log(validPwds(_));
