/*
const strings = ['hello', 'world', 'search', 'good'];
const strings2 = ['not', 'found', 'non'];


function checkString(array, parameter) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === parameter) {
      return i;
    }
  }
  return -1;
}

console.log(checkString(strings, 'good'));
console.log(checkString(strings2, 'good'));



function removeFood(array, parameter) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const food = array[i];
    if (food === parameter) {
      continue;
    }
    result.push(food);
  } 
  return result;
}
function remove2Food(array, parameter) {
  const result = [];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    const food = array[i];
    if (food === parameter && count < 2) {
      count ++;
      continue;
    } 
      result.push(food);
  } 
  return result;
}

function removeLast2Food(array, parameter) {
  const inverted = array.slice().reverse();
  const result = [];
  let count = 0;
  for (let i = 0; i < inverted.length; i++) {
    const food = inverted[i];
    if (food === parameter && count < 2) {
      count ++;
      continue;
    } 
      result.push(food);
  } 
  return result.reverse();
}

const comida = ['turca', 'platano', 'turca', 'apple', 'melon', 'sandia', 'turca'];

//console.log(removeFood(comida, 'turca'));
//console.log(remove2Food(comida, 'turca'));
console.log(removeLast2Food(comida, 'turca'));
console.log(comida);
*/

function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuuz');
      continue;
    }
    if (i % 3 === 0) {
      console.log('Fizz');
      continue;
    }
    if (i % 5 === 0) {
      console.log('Buzz');
      continue;
    }
    console.log(i);

  }
}


const strings = ['hello', 'world', 'search', 'world', 'search', 'world'];
const strings2 = ['not', 'found', 'not'];

function checkString(array, parameter) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === parameter) {
      return i;
    }
  }
  return -1;
}


function unique(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (checkString(result, element) === -1) {
      result.push(element);
    }
  }
  return result;
}

console.log(unique(strings));
console.log(unique(strings2));
