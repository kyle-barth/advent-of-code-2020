const input: string = `paste input here`;
const _: string[] = input.split("\n\n");

const requiredFields: string[] = `byr,iyr,eyr,hgt,hcl,ecl,pid`.split(",");

const validPassport = (passportData: string): boolean => {
  return requiredFields.every((requiredField: string) =>
    passportData.includes(requiredField)
  );
};

const totalValidPassports = (passports: string[]): number => {
  let total: number = 0;

  passports.forEach((passport: string) => {
    if (validPassport(passport)) {
      total++;
    }
  });

  return total;
};

console.log(totalValidPassports(_));
