//* Practice Set - 1
let myFullName: string = "Meraj Uddin Malik";
let age: number = 27;
let isStudent: boolean = true;

console.log(
  `My name is ${myFullName}, I am ${age} years old. Student: ${isStudent}`
);

//* Practice Set - 1
let city: string = "Karachi";
let temprature: number = 36.5;
let isRaining: boolean = true;

console.log(
  `I live in ${city}. Today the temprature is ${temprature} C , ${
    isRaining == true ? "Yes its Raining Today" : "No Its Not Raining Today"
  }`
);

//* Practice Set - 1
let myFavNum: number = 98;
let myAge: number = 27;
let pi: number = 3.14;
let myNegVal: number = -5;

// let invalidResult : number = myAge + "years";
// let invalidValue : number = "123";
let computedValue: number = Math.sqrt(16);
let nanValue: number = NaN;
console.log(nanValue); // Output: NaN

// A1
let userAge: number = 28;
console.log(`User age is: ${userAge} years`);

// A2
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));

// A3
let scores: number[] = [85, 90, 78];
console.log(scores[2]);

// A4
let person: { name: string; isStudent: boolean } = {
  name: "John",
  isStudent: true,
};
console.log(
  `Name: ${person.name}, Student: ${person.isStudent ? "Yes" : "No"}`
);

// A5
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 10));

// A6
let user: [number, string] = [45, "Alice"];
console.log(user);

// A7
function printInfo(obj: { id: number; name: string }): void {
  console.log(`User ID: ${obj.id}, Name: ${obj.name}`);
}

printInfo({ id: 1, name: "Alice" });

// A8
let colours: string[] = ["red", "green", "blue"];
console.log(colours[1]);

// A9
function getLength(name: string): number {
  return name.length;
}

console.log(getLength("AliceAndTheBorderLands"));