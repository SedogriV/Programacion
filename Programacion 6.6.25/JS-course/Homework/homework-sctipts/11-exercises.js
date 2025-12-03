/*

const nums = [10,20,30,55,75,1,56];
const names = ['David','Sarah','Aji','Ito','Copito','Babaji','Yop'];


nums[2] = 99;
console.log(nums);


function getLastValue(value) {
  const lastIndex = value.length - 1;
  console.log(value[lastIndex]);
}

function arraySwap(value) {
  const lastIndex = value.length - 1;
  const fisrtValue = value[0];
  const lastValue = value[lastIndex];
  

  value[0] = lastValue;
  value[lastIndex] = fisrtValue;
  return value;
}

getLastValue(nums);
getLastValue(names);
console.log(arraySwap(nums));
console.log(arraySwap(names));

for (let i = 0; i <= 10; i += 2) {
 console.log(i);
}

for (let i = 5; i >= 0; i --) {
  console.log(i);
 }
 let i1 = 0
 while (i1 <= 10) {
  console.log(i1);
  i1 += 2;
 }
 let i2 = 5
 while (i2 >= 0) {
  console.log(i2);
  i2 --;
 }
  */
/*

 const nums = [10,20,30,55,75,1,56];
 const names = ['David','Sarah','Aji','Ito','Copito','Babaji','Yop'];
 console.log(nums);
 

function addOne(value) {
  let valueAddOne = [];
  for (let i = 0; i < value.length; i++) {
    const indexValue = value[i];
    valueAddOne.push(indexValue + 1);
    
  }
  console.log(valueAddOne);
}

addOne(names);


function addNum(value, num) {
  let valueAddNum = [];
  for (let i = 0; i < value.length; i++) {
    const indexValue = value[i];
    valueAddNum.push(indexValue + num);
    
  }
  console.log(valueAddNum);
}

addNum(nums, 50);



function addArray(value1, value2) {
  let valueAddArray = [];
  for (let i = 0; i < value1.length; i++) {
    const indexValue1 = value1[i];
    const indexValue2 = value2[i];
    
    valueAddArray.push(indexValue1 + indexValue2);
    
  }
  console.log(valueAddArray);
}


addArray(names, nums);



const numbers = [10,-20,30,55,-75,1,-56,];
let result = 0;

function countPositive(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      result ++;
    }
  }
  return result;
}

console.log(countPositive(numbers));
addArray(numbers, nums);

*/
const nums = [10,20,30,55,75,1,56];
const nums2 = [-10,20,30,55,-75,1,56];
const nums3 = [];
const nums4 = [3];



function minMax(array) {
  let resultObject = {
    max: null,
    min: null
  };
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (resultObject.max === null ||resultObject.max < value) {
      resultObject.max = value;
    }
    if (resultObject.min === null ||resultObject.min > value) {
      resultObject.min = value;
    }
  }

  
  console.log(resultObject);
}

minMax(nums);
minMax(nums2);
minMax(nums3);
minMax(nums4);



const nombres = ['David', 'Sarah', 'Sarah', 'David', 'Aji', 'Ito', 'Ito','Babaji','Copito']

function countWords(array) {
  const result = {};

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (!result[value]) {
      result[value] = 1;
    } else {
      result[value]++;
  }
}
console.log(result);
}
countWords(nombres)