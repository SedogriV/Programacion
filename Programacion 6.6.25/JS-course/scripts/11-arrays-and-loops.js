/*
const myArray = [10,20,30];
console.log(myArray);

console.log(myArray[2]);

myArray[0] = 99;
console.log(myArray);


[1, 'Hello', true, { name: 'socks'}, [1, 2]];

console.log(typeof [1, 2]);
console.log(Array.isArray([1, 2]));

console.log(myArray.length);

myArray.push(100);
console.log(myArray);

myArray.splice(0, 1);
console.log(myArray);

*/  
/*
let i = 1;

while (i <= 20) {
  console.log(i);
  i += 1;
}


for (let i=1; i <= 5; i++) {
  console.log(i);
}

let randomNumber = 0;

while (randomNumber < 0.5) {
  randomNumber = Math.random();
}
console.log(randomNumber);
*/  
/*
const todoList = [
  'make dinner',
  'wash dishes',
  'watch youtube'
]

for (let i = 0; i < todoList.length; i++) {
  const value = todoList[i];
  console.log(value);
}
  */  
/*
const numbers = [1, 1, 3];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  total += number;
}
console.log(total);
*/
/*
const numbers = [2,5,8,7];
let numbers2 = [];

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  numbers2.push(num * 2);
}
console.log(numbers2);
*/

const array1 = [1, 2, 3]; //array is a reference

const array2 = array1.slice();

array2.push(4);
console.log(array1);
console.log(array2);

const [firstValue, secondValue] = [1, 2, 3];

for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0  ) {
    continue;
  }
  console.log(i);
  if (i === 8) {
    break;
  }
}

let i = 1;

while (i <= 10) {
  if (i % 3 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

function doubleArray(numbers) {
  let numbers2 = [];

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num === 0) {
      return numbers2;
    }
    numbers2.push(num * 2);
  }
  return numbers2;
}

console.log(doubleArray([1,1,3]));

console.log(doubleArray([2, 2, 5, 0, 5]));