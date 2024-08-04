// type alias//
type Employee = {
  readonly id: number; //readonly is for not changing the id of the employee
  name: string;
  retire?: (date: Date) => void; //"?" means that this parameter is optional 
};

const employee: Employee = {
  id: 1,
  name: "john",
  retire: (date: Date) => {
    console.log(date);
  },
};

//union types//
const kgToLbs = (weight: number | string): number => {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
};

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));

//nullable types//
const greet = (name: string | null | undefined): string => {
  if (name) return `hello ${name}`;
  else return "Hello";
};

greet(null);
