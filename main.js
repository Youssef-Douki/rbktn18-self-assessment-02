// use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)



//=============================================================================
/*                                  Q1                                       */
//=============================================================================

//Using Map , Write a function that takes an array of strings as a input,and returns an array
//of all of those strings, but transformed to upper case.
//You can use toUpperCase method to convert a string to upper case.
// Note: please write one or two lines here describing your solution.
//function map can loop through the whole array and it has a return so i used the map function to loop through my array and i used .toUpperCase to change the elements
// to upper case 
// var strArr = ['hello', 'world', 'whirled', 'peas'];
// uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]

function uppercaseAll(arrayOfStrings) {
  return map(arrayOfStrings, function(string){
    return string.toUpperCase()
  })
}

//=============================================================================
/*                                  Q2                                       */
//=============================================================================
//Using Filter , write a function that takes array of objects  as an input and returns an array
//with only the countries that have a population higher than 500 million.
//Here’s the data you’ll work with:

var data = [
  {
    country: "China",
    population: 1409517397
  },
  {
    country: "India",
    population: 1339180127
  },
  {
    country: "USA",
    population: 324459463
  },
  {
    country: "Indonesia",
    population: 263991379
  }
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.
//the function filter can loop through the whole array beccause it has the function each inside it and have an if condition that filter the array and has a return also 
//so i put mu if condition and i return the filter 

function highestPopulation(arrayOfObjects) {
  return filter(arrayOfObjects,function(element){
    return element.population > 500000000
  })
}

//=============================================================================
/*                              Q3                                           */
//=============================================================================

//Using Map, Write a function halveAll that takes an array of numbers as a input and returns an array
// of all of those numbers halved (divided by two).
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]
// Note: please write one or two lines here describing your solution.
//i used the map because it can loop and modify also the array but keep the same length so i used it and i devided the numbers by 2 one by one 

function halveAll(numbers) {
  return map(numbers,function(number){
    return number/2
  })
}

//=============================================================================
/*                                  Q4                                       */
//=============================================================================
//Using Each, write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];
// Note: please write one or two lines here describing your solution.
//the each can loop through an array and the objects but it has no return so i put a varibal first and assign an empty array to it to push through that varibal 
//then i return it with only the values of my object 

function values(obj) {
  var res = []
  each(obj,function(value){
    res.push(value)
  })
  return res
}


//Good Luck :))
