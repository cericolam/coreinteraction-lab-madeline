// Problem 1

function getFirst (myArray) {
	var first = myArray[0];
	return first; 
}

var testArray = [4, 13, 87];
var result = getFirst(testArray);
var result = 4;

console.log(result);

console.log(getFirstArray)


// Problem 2

var testArray = [4, 13, 87];

function getLast(myArray) {
var last = testArray[2];
return last;
}

var result = getLast(testArray);
console.log(result);


// Problem 3

var numberArray = [4, 13, 87];
decrementArray(numberArray);
console.log(result);

function findLargest(argArray) {
  var largest = 0;
  
  for (var i = 0; i < argArray.length; ++i) {
    var item = argArray[i];
    if (item > largest) {
      largest = item;
    } }  
  return largest; }


// Problem 4

var numberArray = [4, 13, 87];
decrementArray(numberArray);
console.log(result);

for (var i = 0; i < numberArray.length; ++i) {
    numberArray[i] = numberArray[i] - 1;
}

console.log(numberArray);


// Problem 5

var testArray ['sweet', 'sphere', 'stream']

testArray.push('hello');
console.log(testArray);

function addHello(wordArray) {
  for (var i = 0; i < wordArray.length; ++i) {
    wordArray[i] = 'hello ' + wordArray[i];
  }
  
  return wordArray;
}


// Problem 6

var testArray = [4, 13, 87];
appendSomething(testArray);
console.log(testArray)

function appendSomething(argArray) {
  argArray.push('something');
}


// Problem 7

{ a: 1, b: 2 } -> print 'a' then 'b'

 var myObject = {
 name: 1,
 otherThing: 2
 };

var people = [{
name: 'person', 
height: 345
 }]


function listProps (argObject) {
  for (var key in argObject) {
    console.log(key);
  }
}




