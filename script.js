
// 1. Create a program using all the JS objects in JavaScript.
console.log("1 Create a program using all the JS objects in JavaScript.")
// Create an array of dates using Date object

const datesArray = [new Date(), new Date("2023-07-23"), new Date("1990-01-01")];

// Use Math object to perform some math operations
const number1 = Math.sqrt(25);
const number2 = Math.random() * 100;

// Use RegExp object to match a pattern
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Use Function object to create a custom function
const customFunction = new Function("a", "b", "return a + b;");

// Use Object methods to manipulate an object
const personObj = {
  name: "afrith",
  age: 21,
};

Object.keys(personObj); // Output: ["name", "age"]
Object.values(personObj); // Output: ["afrith", 21]
Object.entries(personObj); // Output: [["name", "afrith"], ["age", 21]]

console.log(datesArray);
console.log(number1);
console.log(number2);
console.log(regex.test("afrithshariff123@gmail.com"));
console.log(customFunction(5, 10));
console.log(Object.keys(personObj));
console.log(Object.values(personObj));
console.log(Object.entries(personObj));


// ============================================================================================================================

// 2. Create a program using all JS string and JS String methods.
console.log("2 Create a program using all JS string and JS String methods.")
const str = "Hello, world!";
const uppercaseStr = str.toUpperCase();
const lowercaseStr = str.toLowerCase();
const charAtIndex = str.charAt(4);
const substring = str.substring(0, 5);
const slicedStr = str.slice(7);
const indexOfO = str.indexOf("o");
const replacedStr = str.replace("world", "universe");
const concatStr = str.concat(" Welcome!");
const trimmedStr = "   Hello, world!   ".trim();

console.log("uppercaseStr",uppercaseStr);
console.log("lowercaseStr",lowercaseStr);
console.log("charAtIndex",charAtIndex);
console.log("substring",substring);
console.log("slicedStr",slicedStr);
console.log("indexOfO",indexOfO);
console.log("replacedStr",replacedStr);
console.log("concatStr",concatStr);
console.log("trimmedStr",trimmedStr);


// =======================================================================================================================
// 3. Create a program using all JS numbers, JS Number methods, and JS Number properties:
console.log("3 Create a program using all JS numbers, JS Number methods, and JS Number properties:")
const num1 = 123.456;
const num2 = -456.789;
const num3 = 0.001234;

const num1Fixed = num1.toFixed(2);
const num2Precision = num2.toPrecision(4);
const num3String = num3.toString();
const num4ParsedInt = parseInt("789");
const num5ParsedFloat = parseFloat("3.14");

console.log("num1Fixed",num1Fixed);
console.log("num2Precision",num2Precision);
console.log("num3String",num3String);
console.log("num4ParsedInt",num4ParsedInt);
console.log("num5ParsedFloat",num5ParsedFloat);

console.log("MAX_VALUE",Number.MAX_VALUE);
console.log("MIN_VALUE",Number.MIN_VALUE);
console.log("POSITIVE_INFINITY",Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY",Number.NEGATIVE_INFINITY);

// ===============================================================================================================================

// 4. Program using all JS Array, JS array methods, and JS array sort
console.log("4. Program using all JS Array, JS array methods, and JS array sort")
const numbers = [5, 2, 8, 1, 10, 3];

// Use array methods
numbers.push(7);
numbers.pop();
numbers.shift();
numbers.unshift(4);

const slicedNumbers = numbers.slice(1, 4);
const index = numbers.indexOf(8);

const filteredNumbers = numbers.filter((num) => num > 5);
const mappedNumbers = numbers.map((num) => num * 2);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Use array sort
numbers.sort((a, b) => a - b); // ascending order
numbers.sort((a, b) => b - a); // descending order

console.log("numbers",numbers);
console.log("slicedNumbers",slicedNumbers);
console.log("index",index);
console.log("filteredNumbers",filteredNumbers);
console.log("mappedNumbers",mappedNumbers);
console.log("sum",sum);

// ===============================================================================================================================
//5 Usage of BigInt
console.log("5 Usage of BigInt")
const regularNumber = 9007199254740992; 
console.log(regularNumber); // Output: 9007199254740992

const regularNumberSum = regularNumber + 1;
console.log(regularNumberSum); // Output: 9007199254740992 (Lost precision due to exceeding the limit)

const bigIntegerNumber = 9007199254740992n; // 2^53 - 1 + 1
console.log(bigIntegerNumber); // Output: 9007199254740992

const bigIntSum = bigIntegerNumber + 1n;
console.log(bigIntSum); // Output: 9007199254740993n (Correctly maintains precision)

