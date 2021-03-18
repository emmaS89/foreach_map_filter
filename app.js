// forEach & map & filter Exercises

// forEach

// Example 1

// doubleValues
// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

// doubleValues([1,2,3]) // [2,4,6]
// doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

// Solution 1
function doubleValues(array) {
  let newArray = [];
  array.forEach(value => {
    let doubled = value * 2
    return newArray.push(doubled)
  });
  return newArray
}

console.log(doubleValues([1,2,3])) // [2,4,6]
console.log(doubleValues([5,1,2,3,10])) // [10,2,4,6,20]

// *************************************************************

// Example 2

// onlyEvenValues
// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

// onlyEvenValues([1,2,3]) // [2]
// onlyEvenValues([5,1,2,3,10]) // [2,10]

// Solution 2
function onlyEvenValues(array) {
  let newArray = [];
  array.forEach(value => {
    if( value % 2 === 0) {
      newArray.push(value)
    } 
  });
  return newArray
}

console.log(onlyEvenValues([1,2,3])) // [2]
console.log(onlyEvenValues([5,1,2,3,10])) // [2,10]


// *******************************************************

// Example 3

// showFirstAndLast
// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

// showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

// Solution 3
function showFirstAndLast(array) {
  let newArray = [];
  array.forEach(value => {
    let first = value.charAt(0);
    let last = value.charAt(value.length - 1)
    newArray.push(first + last)

  });
  return newArray
}

console.log((showFirstAndLast(['colt','matt', 'tim', 'test']))) // ["ct", "mt", "tm", "tt"]
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']) )// ['hi', 'ge', 'se']

// ******************************************

// Example 4

// addKeyAndValue
// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

// addKeyAndValue(
// [
//   {name: 'Elie'},
//   {name: 'Tim'},
//   {name: 'Matt'},
//   {name: 'Colt'}
// ],
//   'title',
//   'instructor'
// )

/*
  [
    {name: 'Elie', title:'instructor'},
    {name: 'Tim', title:'instructor'},
    {name: 'Matt', title:'instructor'},
    {name: 'Colt', title:'instructor'}
  ]
*/

// Solution 4
// NOTE: we don't need to create new empty array. Because we have an array of object

function addKeyAndValue(array, key, value) {
  array.forEach((element) => {
    element[key] = value;
  });
  return array;
}

console.log(addKeyAndValue(
[
  {name: 'Elie'},
  {name: 'Tim'},
  {name: 'Matt'},
  {name: 'Colt'}
],
  'title',
  'instructor'
))

/*
  [
    {name: 'Elie', title:'instructor'},
    {name: 'Tim', title:'instructor'},
    {name: 'Matt', title:'instructor'},
    {name: 'Colt', title:'instructor'}
  ]
*/

// *********************************************************

// Example 5

// vowelCount
// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}


// Solution 5
function vowelCount(string) {
  let obj = {};
  let splitLetter = string.split("")
  let vowels = 'aeoui';

  splitLetter.forEach(letter => {
    let lowerCasedLetter = letter.toLowerCase()
    if(vowels.indexOf(lowerCasedLetter) !== -1) {
      if(obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      }else {
        obj[lowerCasedLetter] = 1
      }
    }
  });
  return obj
}

console.log((vowelCount('Elie'))) // {e:2,i:1};
console.log(vowelCount('Tim')) // {i:1};
console.log(vowelCount('Matt') )// {a:1})
console.log(vowelCount('hmmm')) // {};
console.log(vowelCount('I Am awesome and so are you')) // {i: 1, a: 4, e: 3, o: 3, u: 1}

// *****************************************************************************************
// *****************************************************************************************

// map

// Example 1

// doubleValuesWithMap
// Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

// doubleValuesWithMap([1,2,3]) // [2,4,6]
// doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]

// Solution 1
function doubleValuesWithMap(array) {
  return array.map((value) => {
    return value * 2
  })
}

console.log(doubleValuesWithMap([1,2,3])) // [2,4,6]
console.log(doubleValuesWithMap([1,-2,-3]) )// [2,-4,-6]

// **************************************************

// Example 2

// valTimesIndex
// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

// valTimesIndex([1,2,3]) // [0,2,6]
// valTimesIndex([1,-2,-3]) // [0,-2,-6]

// Solution 2
function valTimesIndex(array) {
  return array.map((value, index) => {
    return value * index
  })
}

console.log(valTimesIndex([1,2,3])) // [0,2,6]
console.log(valTimesIndex([1,-2,-3])) // [0,-2,-6]

// *****************************************************

// Example 3

// extractKey
// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

// extractKey(
//   [
//     {name: 'Elie'},
//     {name: 'Tim'},
//     {name: 'Matt'},
//     {name: 'Colt'}
//   ],
//   'name'
// ) // ['Elie', 'Tim', Matt', 'Colt']

// Solution 3
function extractKey(array, key) {
  return array.map((element) => {
    return element[key]
  })
}

console.log(extractKey(
  [{name: 'Elie'},
  {name: 'Tim'},
  {name: 'Matt'},
  {name: 'Colt'}],
  'name')) //  ["Elie", "Tim", "Matt", "Colt"]

// ********************************************

// Example 4

// extractFullName
// Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.

// 
// extractFullName([
//   {first: 'Elie', last:"Schoppik"},
//   {first: 'Tim', last:"Garcia"},
//   {first: 'Matt', last:"Lane"},
//   {first: 'Colt', last:"Steele"}
// ]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']


// Solution 4
function extractFullName(array, first, last) {
  return array.map((element) => {
    return `${element['first']} ${element['last']}`
  })
}

console.log(extractFullName([
{first: 'Elie', last:"Schoppik"}, 
{first: 'Tim', last:"Garcia"}, 
{first: 'Matt', last:"Lane"}, 
{first: 'Colt', last:"Steele"}], 'first', 'last')) 
// ["Elie Schoppik", "Tim Garcia", "Matt Lane", "Colt Steele"]

// *****************************************************************************************
// *****************************************************************************************

// filter
// Exampe 1

// filterByValue
// Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

// filterByValue(
// [
//   {first: 'Elie', last:"Schoppik"},
//   {first: 'Tim', last:"Garcia", isCatOwner: true},
//   {first: 'Matt', last:"Lane"},
//   {first: 'Colt', last:"Steele", isCatOwner: true}
// ],
// 'isCatOwner', true
// )

/*
  [
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ]
*/

// Solution 1

function filterByValue(array, key) {
  return array.filter((element) => {
    return element[key] !== undefined;
  });
}

console.log(filterByValue(
[
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia", isCatOwner: true},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele", isCatOwner: true}
],'isCatOwner', true))

// {first: "Tim", last: "Garcia", isCatOwner: true}
// {first: "Colt", last:"Steele", isCatOwner: true}

// ****************************************************

//  Example 2
// Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

// find([1,2,3,4,5], 3) // 3
// find([1,2,3,4,5], 10) // undefined


// Solution 2
function find(array, searchValue) {

  return array.filter((value) => {
    return value === searchValue;
  })[0];
}

console.log(find([1,2,3,4,5], 3)) // 3
console.log(find([1,2,3,4,5], 10)) // undefined

// ****************************************************

// Example 3

// findInObj
// Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

// findInObj(
//   [
//     {first: 'Elie', last:"Schoppik"},
//     {first: 'Tim', last:"Garcia", isCatOwner: true},
//     {first: 'Matt', last:"Lane"},
//     {first: 'Colt', last:"Steele", isCatOwner: true}
//   ],
//   'isCatOwner',
//   true
// )
// {first: 'Tim', last:"Garcia", isCatOwner: true}

// Solution 3
function findInObj(array, key, searchValue) {
  return array.filter((element) => {
    return element[key] === searchValue
  })[0]
}

console.log(findInObj(
  [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ], 'isCatOwner', true
))
// {first: 'Tim', last:"Garcia", isCatOwner: true}

// *******************************************************

// Example 4

// removeVowels
// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

// removeVowels('Elie') // ('l')
// removeVowels('TIM') // ('tm')
// removeVowels('ZZZZZZ') // ('zzzzzz')

// Solution 4
function removeVowels(string) {
  let vowels = 'aeoui';
  let splitLetters = string.toLowerCase().split("")
  return splitLetters.filter((letter) => {
    return vowels.indexOf(letter) === -1
  })
  .join("") // Be careful: Without join() Mehod => Output: ["l"] Array
}
console.log(removeVowels('Elie')) // l
console.log(removeVowels('TIM')) // tm
console.log(removeVowels('ZZZZZZ')) // zzzzzz

// *******************************************************

// Example 5

// doubleOddNumbers
// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

// doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
// doubleOddNumbers([4,4,4,4,4]) // []

function doubleOddNumbers(array) {
  return array
  .filter((value) => {
    return value % 2 !== 0
  })
  .map((value) => {
    return value * 2
  })
}
console.log(doubleOddNumbers([1,2,3,4,5]))// [2,6,10]
console.log(doubleOddNumbers([4,4,4,4,4])) // []