// growth order is O(N)
// grows proportionally with N
function countSheep(num){
  //stopping condition of base case
  if(num === 0){
      console.log(`All sheep jumped over the fence`);
  } 
  //this is the recursive case
  //this will be executed until it reaches base case
  else{
      console.log(`${num}: Another sheep jump over the fence`);
      countSheep(num-1);
  }
}

// growth order is O(N) where N is size of array
// perform one operation for each value in array
function double_all(arr) {
  if (!arr.length) {
      return [];
  }
  return [arr[0] * 2, ...double_all(arr.slice(1))];
}

// growth order is O(N) where N is length of string
// perform one operation for each character in string
function reverseString(str) {
  if (str.length < 2) {
      return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

// growth order is O(N)
// perform one operation as decrement from n to 1 
function triangle(n) {
  if (n < 2) 
      return n;
  return n + triangle(n - 1);
}


// worst case is O(N) growth order
// iterates through n characters of string
function split(str, sep) {
  var idx = str.indexOf(sep);
  if (idx == -1) 
      return [str];
  //you don't have to return an array, you can return a string as an array of 
  //character 
  //return str;
  return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
//all these are valid syntax
//return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
//return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
}

// growth order is O(logN)
// as num increases, computations grow logarithmically
function convertToBinary(num){
  if(num>0){
      let binary = Math.floor(num%2); //save the reminder in binary
  //divide the number by 2 and send that to the function again
  //carry the reminder to the next recursion call
      return (convertToBinary(Math.floor(num/2))+ binary);
  }else{
      return ''; //base case - at some point the divisions will lead to 0
  }
}

// growth order is O(n)
// perform operation once as decrement from n to 0
function factorial(n) {  
  // Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  // This is our Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

// growth order is O(2^N)
// each value from base case to N generates two successive calls
function fibonacci(n) {
  // Base case
  if (n <= 0) {
    return 0;
  }
  // Base case
  if (n <= 2) {
    return 1;
  }	
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);	
}

// growth order is O(N!)
// will compute N! permutations for a character of size N
function anagrams(prefix, str){
  if(str.length <= 1){
      console.log(`The anagram is ${prefix}${str}`);
  } else {
      for(let i=0; i<str.length; i++){
          let currentLetter = str.substring(i, i+1); 
          let previousLetters = str.substring(0,i);
          let afterLetters = str.substring(i+1);
          anagrams(prefix+currentLetter, previousLetters+afterLetters);
      }
  }
}

function printAnagram(word){
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);

}

// 
const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
]

// worst case growth order O(N^2)
// worst case is performing N + N-1 + ... + 1 ~ N^2 searches
function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy.filter(item => item.parent === parent)
                 .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
}

// growth order is O(N) where N is number of keys in object tree
// perform console log once for each key in object tree
function traverseA(data, depth = 0) {
	let indent = " ".repeat(depth * 4);
	Object.keys(data).forEach(key => {
		console.log(indent + key);
		traverseA(data[key], depth + 1)
	});
}

// growth order is O(N)
// iterates through each key of each object in tree 
function traverseB(node, indent=0) {
  for (var key in node) {
    console.log(" ".repeat(indent), key);
    traverseB(node[key], indent + 4);
	}
}

