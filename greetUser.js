function greetUser (name) {
    return `Hello, ${name}!`;
}
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(4, 7)); // Output: 11
function multiplyArray(arr) {
    return arr.map(num => num * 2);
}
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
let number = 5;
while (number > 0) {
    console.log(number);
    number--;
}
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => console.log(fruit));
const addNumbers = [4, 12, 7, 20, 3];
const filteredNumbers = numbers.filter(num => num > 10);
console.log(filteredNumbers); // Output: [12, 20]
const student = {
    name: "John",
    age: 20,
    isEnrolled: true
};
console.log(student.name, student.age, student.isEnrolled);
student.sayHello = function() {
console.log(`Hi, my name is ${this.name}`);
};
student.sayHello(); // Output: Hi, my name is John
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}
const squaredNumbers = [2, 4, 6, 8].map(num => num * num);
console.log(squaredNumbers); // Output: [4, 16, 36, 64]
let colors = ["red", "blue", "green"];
colors.push("yellow");
console.log(colors); // Output: ["red", "blue", "green", "yellow"]
let colors = ["red", "blue", "green"];
colors.pop();
console.log(colors); // Output: ["red", "blue"]
let numbers = [10, 20, 30, 40, 50];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [20, 40, 60, 80, 100]
let ages = [15, 21, 17, 30, 12];
const filteredAges = ages.filter(age => age >= 18);
console.log(filteredAges); // Output: [21, 30]
let names = ["Anna", "Ben", "Claire"];
names.forEach(name => console.log(`Hello, ${name}!`));
let scores = [2, 4, 6];
const totalScore = scores.reduce(acc, score) = acc + score