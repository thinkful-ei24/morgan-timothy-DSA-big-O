//Exercise 1 - Counting Sheep
// O(N)
function countSheepLoop(num) {
  for (let i = num; i > 0; i--) {
    console.log(`counting sheeps ${i}`);
  }
}
countSheepLoop(10);

/*====================================================================*/
// O(N)
function double_all(arr) {
  var ret = Array(arr.length);
  for (var i = 0; i < arr.length; ++i) {
    ret[i] = arr[i] * 2;
  }
  return ret;
}
let arr = [10, 4, 5, 2, 1];
console.log(double_all(arr));

/*====================================================================*/
// O(N)
function reverse_tail(str) {
  var accumulator = "";
  while (str !== "") {
    accumulator = str[0] + accumulator;
    str = str.slice(1);
  }
  return accumulator;
}

/*====================================================================*/
// O(N)
function triangle(n) {
  var tot = 0;
  for (var i = 1; i <= n; ++i) {
    tot += n;
  }
  return tot;
}
/*====================================================================*/
// O(N)
function split(str, sep) {
  var ret = [];
  while (true) {
    var idx = str.indexOf(sep);
    if (idx == -1) break;
    ret.push(str.slice(0, idx));
    str = str.slice(idx + sep.length);
  }
  ret.push(str);
  return ret;
}

/*=================================================================================*/
// O(log(N))
function convertToBinaryIter(num) {
  var binary = "";
  while (num > 0) {
    let rem = Math.floor(num % 2);
    binary = rem + binary;
    num = Math.floor(num / 2);
  }
  return binary;
}
console.log(convertToBinaryIter(124)); //1111100

/*=================================================================================*/
// O(N)
function factorialIterative(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorialIterative(5));

/*=================================================================================*/
// O(N)
function fibonacciIterative(number) {
  let num1 = 1;
  let num2 = 0;
  let fib = null;
  while (number > 0) {
    fib = num1;
    num1 = num1 + num2;
    num2 = fib;
    number--;
  }
  return num2;
}

//******** ES6 makes it a bit easier*****
// O(N)
function fibonacciIterative2(number) {
  let [num1, num2] = [1, 0];
  while (number-- > 0) {
    [num1, num2] = [num2 + num1, num1];
  }
  return num2;
}
console.log(fibonacciIterative2(3));

/*=================================================================================
Exercise 9 - Anagram

Too tidious to do this iteratively
*/

/*
Exercise 8 - Animal Heirarchy

Analyze it recursivly - no iterative version needed

*/

/*=================================================================================
Exercise 10 - Animal hierarchy
A program to analyze and understand recursion
No need to solve it iteratively


/*=================================================================================*/
/*
Exercise 11: Organization Chart
No need to have an iterative version of this
*/
