/*
Problem statement: Explain the usage of ternary operator with syntax and write a program to check whether the number is even or odd using the ternary operator.

ans: 
The ternary operator, also known as the conditional operator, is a concise way to write conditional expressions in JavaScript. It consists of three parts: a condition, a value to be returned if the condition is true, and a value to be returned if the condition is false. Its syntax is as follows:
condition ? valueIfTrue : valueIfFalse

*/

// evenOdd.js

const number = 10;
const result = number % 2 === 0 ? "even" : "odd";
console.log(`The number is ${result}.`);

