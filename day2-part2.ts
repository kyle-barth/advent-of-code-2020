const input: string = `paste input here`;
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

    if (
      (pwd.charAt(min) === letter && pwd.charAt(max) !== letter) ||
      (pwd.charAt(min) !== letter && pwd.charAt(max) === letter)
    ) {
      _pwds++;
    }
  });

  return _pwds;
};

console.log(validPwds(_));
