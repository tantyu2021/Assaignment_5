//STEP 1 - a string array 
let mMovies = ["Dead Man", "Gladiator", "Hunger", "8 1/2", "Anna Karenina"];
window.console.log(mMovies.length);//display how many items
window.console.log(mMovies[1]);

//STEP 2 -Declare an array using the function constructor method
let movies = new Array("Nostalgia", "The mirror", "Andrei Rublev", "Persona", "Taxi Driver");
console.log(movies.length); 
console.log(movies[0]);  

//STEP 3 -Add (at the end of the array)a new item using PUSH 
movies = movies.push("The Irishman");
console.log(movies);
//console.log(movies[5]);"The Irishman"-6th place


//STEP 4 -literal notation. the DELETE operator to remove the first movie in the array 
movies = ["Dead Man", "Gladiator", "Hunger", "8 1/2", "Anna Karenina"]; 
delete movies[0]; 
console.log(movies);  

//The slice() method extracts (last element)
movies = movies.slice(0, 4);
console.log(movies);

// delete 1 item in an array using SHIFT
movies = ["Dead Man", "Gladiator", "Hunger", "8 1/2", "Anna Karenina"]; 
movies = movies.shift(); 
console.log(movies);//return "Dead Man"


//STEP 5 - a for loop 
console.log('STEP 5 - a for loop');
 movies = ["Nostalgia", "The mirror", "Andrei Rublev", "Persona", "Taxi Driver", "The Irishman","Gladiator"];
for (var i = 0; i < movies.length; i++) {
    window.console.log(movies[i]);
    window.document.write(movies[i] + '<br>');
}
//STEP 6 -a for-in loop 
console.log('STEP 6  -a for-in loop');

movies = ["Nostalgia", "The mirror", "Andrei Rublev", "Persona", "Taxi Driver", "The Irishman"];
let movie;
for (movie in movies) {
    window.console.log(movies[movie]);
}

//STEP 7 -The sort() method 
console.log('STEP 7  - the sort() method');
movies = ["Nostalgia", "The mirror", "Andrei Rublev", "Persona", "Taxi Driver", "The Irishman"];
window.console.log(movies.sort());

//STEP 8 -spec.formatted 
console.log('STEP 8  -spec.formatted');
movies = ["Dead Man", "Gladiator", "Hunger", "8 1/2", "Anna Karenina", "Taxi Driver", "The Irishman"];
var leastFavMovies = ['Movie 1','Movie 2','Movie 3'];
console.log('Movies I like:\t');
for (var i = 0; i < movies.length; i++)  {
    window.console.log(movies[i]);
} 
console.log('Movies I regret watching:\t');
for (var i = 0; i < leastFavMovies.length; i++) {
    window.console.log(leastFavMovies[i]);
}

//or
console.log('....var STEP 8  -spec.formatted2 ');
console.log('Fav Movies:\t', 'Movies I regret watching:');
for (var i = 0; i < movies.length; i++)  {
    window.console.log(movies[i] + '\t', leastFavMovies[i]);
} 
//or
console.log('....var STEP 8  -spec.formatted3 ');
for (var i = 0; i < movies.length; i++){
    window.console.log('Movies I like: ' + movies[i]);
}for (var i = 0; i < leastFavMovies.length; i++){
    window.console.log(`Movies I regret watching: ${leastFavMovies[i]}`);
}


console.log(movies);
console.log(leastFavMovies);

//STEP 9  - concat & reverse
console.log('STEP 9  - concat & reverse');
movies = ["Dead Man", "Gladiator", "Hunger", "8 1/2", "Anna Karenina", "Taxi Driver", "The Irishman"];
leastFavMovies = ['Movie 1','Movie 2','Movie 3'];
var movies2 = movies.concat(leastFavMovies);
//console.log(movies2[i]);
window.console.log(movies2.reverse());
window.document.write(movies2.reverse());

//STEP 10 -The pop() method removes the last element from an array and returns that element:
console.log('STEP 10  -The pop() method removes the last element/return it');
movies2 = movies2.pop();
window.console.log(movies2);

//STEP 11 --The shift() method removes the first element from an array and returns that element:
console.log('STEP 11  -The shift() method removes the first element/return it');
movies2=["Nostalgia", "The mirror", "Andrei Rublev", "Persona"];
movies2 = movies2.shift();
window.console.log(movies2);

//also:
movies2=["Nostalgia", "The mirror", "Andrei Rublev", "Persona"];
window.console.log(movies2[0]);//the same

//unshift -method adds one/elements to the front of an array
//movies2 = movies2.unshift("Nostalgia", "The mirror", "Andrei Rublev");

//STEP 12

//STEP 13
var employee1 = {
    "name": "Rippy",
    "title": 3,
    "department": "white",
    "working": true
};
var employee2 = {
    name: "Ann",
    title: 4,
    department: "orange",
    working: false
};
        //console.log(employee1.name); // dote notation access to the object values
       // console.log(employee2["name"]); // bracket notation
        var employees = [employee1, employee2];
        console.log(employees[1].name);   

//STEP 14
for(let i = 0; i < employees.length; i++) {
 //   employees[i] = employees[i];
    console.log( employees[i] + '.');
}
console.log(employees);
//console.log( employees[i].name);

//STEP 15-Add (at the end of the array)a new item using PUSH 
employees = movies.push("Iris");
console.log(employees);

//STEP 16 -Create a multi-dimensional array; iterate/loop through the array and filter out : filter() method
movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
let movNam = movies.filter(function (item) {
return typeof item === "string";
});
window.console.log(movNam);


//STEP 17
var employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally']; 
console.log('Employees:\t');
function showEmployee() {
    employees = employees.toUpperCase();
    for (var i = 0; i < employees.length; i++){
 //       window.console.log(employees[i]);   
    }
    window.console.log(employees[i] + '<br>');
}
window.console.log(employees[i]);


//STEP 18 -filter() method
let filterValues = [58, '', 'abcd', true, null, false, 0];
// function filterValue() {
//     window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
// }
//should be [58, "abcd", true]
let filt = movies.filter(function (item) {
    return typeof item === "string";
    });
    window.console.log(filt);

//STEP 19 -Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.
var randomItem = [1,2,3,4,5,6,7,8,9,0];
var randomAll = randomItem[Math.floor(Math.random()*randomItem.length)];
for(var i = 0; i < randomAll.length; i++) {
    console.log( randomAll);
}
console.log('new random number ',randomAll);


//STEP 20
var arrayNums = [1,2,3];
var max = arrayNums.reduce(function(a, b) {
    return Math.max(a, b);
});

//bigger number
console.log(Math.max(1, 5, 2));

//bigger number
const array1 = [15, -3, 22];
console.log(Math.max(...array1));


