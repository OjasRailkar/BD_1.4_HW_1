const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

//1.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function filterPrimeNumbers(num) {
  return isPrime(num);
}

app.get('/prime-numbers', (req, res) => {
  let result = numbers.filter((num) => filterPrimeNumbers(num));
  res.json(result);
});

//2
let newNums = [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterPositiveNumbers(num) {
  return num > 0;
}

app.get('/positive-numbers', (req, res) => {
  let result = newNums.filter((num) => filterPositiveNumbers(num));
  res.json(result);
});

//3

let newNumbers = [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterNegativeNumbers(num) {
  return num < 0;
}

app.get('/negative-numbers', (req, res) => {
  let result = newNumbers.filter((num) => filterNegativeNumbers(num));
  res.json(result);
});

//4
let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterOddNum(num) {
  return num % 2 !== 0;
}

app.get('/odd-numbers', (req, res) => {
  let result = numbersArr.filter((num) => filterOddNum(num));
  res.json(result);
});

//5

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterNumbersGreaterThan(num, value) {
  return num > value;
}

app.get('/numbers-greater-than', (req, res) => {
  let value = parseFloat(req.query.value);
  let result = numArr.filter((num) => filterNumbersGreaterThan(num, value));
  res.json(result);
});

//6
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterNumbersLessThan(num, value) {
  return num < value;
}

app.get('/numbers-less-than', (req, res) => {
  let value = parseFloat(req.query.value);
  let result = numArray.filter((num) => filterNumbersLessThan(num, value));
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
