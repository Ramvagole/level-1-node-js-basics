
const crypto = require('crypto');

const operation = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Cannot divide by zero';
  }
  return a / b;
}

function sin(a) {
  return Math.sin(a);
}

function cos(a) {
  return Math.cos(a);
}

function tan(a) {
  return Math.tan(a);
}

function random(length) {
  if (!length) {
    return "Provide length for random number generation.";
  }
  return crypto.randomBytes(length).toString('binary');
}

switch (operation) {
  case 'add':
    if (!isNaN(num1) && !isNaN(num2)) {
      console.log(add(num1, num2));
    } else {
      console.log('Please provide two valid numbers for addition.');
    }
    break;
  
  case 'sub':
    if (!isNaN(num1) && !isNaN(num2)) {
      console.log(sub(num1, num2));
    } else {
      console.log('Please provide two valid numbers for subtraction.');
    }
    break;
  
  case 'mult':
    if (!isNaN(num1) && !isNaN(num2)) {
      console.log(mult(num1, num2));
    } else {
      console.log('Please provide two valid numbers for multiplication.');
    }
    break;
  
  case 'divide':
    if (!isNaN(num1) && !isNaN(num2)) {
      console.log(divide(num1, num2));
    } else {
      console.log('Please provide two valid numbers for division.');
    }
    break;
  
  case 'sin':
    if (!isNaN(num1)) {
      console.log(sin(num1));
    } else {
      console.log('Please provide a valid number for sine calculation.');
    }
    break;
  
  case 'cos':
    if (!isNaN(num1)) {
      console.log(cos(num1));
    } else {
      console.log('Please provide a valid number for cosine calculation.');
    }
    break;
  
  case 'tan':
    if (!isNaN(num1)) {
      console.log(tan(num1));
    } else {
      console.log('Please provide a valid number for tangent calculation.');
    }
    break;
  
  case 'random':
    const length = parseInt(num1);
    if (!isNaN(length) && length > 0) {
      console.log(random(length));
    } else {
      console.log('Provide length for random number generation.');
    }
    break;
  
  default:
    console.log('Invalid operation');
}
