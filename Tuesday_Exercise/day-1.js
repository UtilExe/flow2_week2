/* DAY 1 JavaScript Tasks
/* a) Using the filter method:
Declare a JavaScript array and initialize it with some names (Hassan, Jan, Peter, Boline, Frederik etc.).
Use the filter method to create a new array with only names that contains the letter ‘a’.
*/

let names = ["Hassan", "Jan", "Peter", "Boline", "Frederik", "Mads"];

function checkNames(name) {
    return name.includes("a");
}

console.log("Opgave 1A: " + names.filter(checkNames));

/*
b) Using the map method:
Use the names-array created above, and, using its map method, create a new array with all the characters in each name reversed.
*/
// Et map opretter et nyt array og returnerer resultaterne

function reverseName() {
    return name => name.split("").reverse().join("");
}

console.log("Opgave 1B: " + names.map(reverseName()));

/* Implement user-defined functions that take callbacks as an argument
Now, assume the array did not offer these two methods. Then we would have to implement them by ourselves. 

a) Implement a function: myFilter(array, callback)that takes an array as the first argument, and a callback as the second and returns a new (filtered) array according to the code provided in the callback (this method should provide the same behaviour as the original filter method).
Test the method with the same array and callback as in the example with the original filter method.*/
function myFilter(array, callback) {
    let arrayCopy = [];
    array.forEach(element => {
        if (callback(element)) {
            arrayCopy.push(element);
        }
    });
    return arrayCopy;
}
console.log("Opgave 2A: " + myFilter(names, checkNames));

/*
b) Implement a function: myMap(array, callback) that, provided an array and a callback, provides the same functionality as calling the existing map method on an array.
Test the method with the same array and callback as in the example with the original map method.
*/

function myMap(array, callback) {
    let arrayCopy = [];
    array.forEach(element => {
        const newItem = callback(element);
        arrayCopy.push(newItem);
    });
    return arrayCopy;
}

console.log("Opgave 2B: " + myMap(names, reverseName()));

/* OPGAVE 3
3) Getting really comfortable with filter and map
A) Use map + a sufficient callback to map numbers into this array:
var result = [4,8,15,21,11];
*/

var numbers = [1, 3, 5, 10, 11];

var result = numbers.map(function(num, index) {
    if(index == numbers.length-1) {
        return num;
    } else {
        num += numbers[index+1];
        return num;
    }
});
 
console.log("Opgave 3a) ", result);

/*
OPGAVE 3
b) Use map() to create the <a>’s for a navigation set and eventually a string like below (use join() to get the string of <a>’s):
<nav>
  <a href=””>Hassan</a>
  <a href=””>Peter</a>
  <a href=””>Jan</a>
  <a href=””>Boline</a>
</nav>
*/
var nameOpg3 = ["Hassan", "Peter", "Jan", "Boline"];

function nameFunction(str) {
    return '<a href="">"' + str + "<a/>"; 
}

var newData = nameOpg3.map(nameFunction).join('');
console.log("Opgave 3b) ", newData)

/* 
OPGAVE 3
c) Use map()+(join + ..) to create a string, representing a two column table, for the data given below:
*/

var persons = [{name:"Hassan",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];

function makeTable(array) {
    var table = 
 `<table>
    <tr>
        <th>Name</th>
        <th>Phone</th>
    </tr>
        `+array.map(getList).join('')+ `
</table>`;
 
    return table;
}
 
function getList(person) {
    return '\t<tr><td>'+person.name+'</td><td>'+person.phone+'</td></tr>\n';
}
 
console.log("Opgave 3c) \n", makeTable(persons));