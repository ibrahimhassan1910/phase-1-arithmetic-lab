const { expect } = require("chai");

// Write your code here
const num1 = 31;
const num2 = 2;

const multiply = num1 * num2;
console.log(multiply);

//test case
expect(multiply).to.equal(62);

// Random number generator
function random() {
  return Math.floor(Math.random() * 100) + 1;
}

console.log(random());

// Test case
const randomNumber = random();
expect(randomNumber).to.be.greaterThan(0);

//export the random function
module.exports = { random };


  
