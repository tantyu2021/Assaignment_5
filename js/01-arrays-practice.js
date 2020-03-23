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
window.document.write(movies);
//console.log(movies[1]); 
console.log(movies);
console.log(movies[5]);//"The Irishman"-6th place
//STEP 4 -literal notation. delay 1 item in an array using SHIFT
let movies1 = ["Dead Man", "Gladiator", "Hunger", "8 1/2", "Anna Karenina"]; 
movies = movies1.shift();
window.document.write(movies1); 
console.log(movies1);
//STEP 5
 movies = ["Nostalgia", "The mirror", "Andrei Rublev", "Persona", "Taxi Driver", "The Irishman"];
for (var i = 0; i < movies.length; i++){
    window.console.log(movies[i]);
}
//STEP 6
movies = ["Nostalgia", "The mirror", "Andrei Rublev", "Persona", "Taxi Driver", "The Irishman"];
for (var i = 0; i < movies.length; i++){
    window.console.log(movies[i]);
}

//STEP 7
movies = ["Nostalgia", "The mirror", "Andrei Rublev", "Persona", "Taxi Driver", "The Irishman"];
for (var i = 0; i < movies.length; i++){
    window.console.log(movies[i]);
}
//STEP 8
movies = ["Dead Man", "Gladiator", "Hunger", "8 1/2", "Anna Karenina", "Taxi Driver", "The Irishman"];
var leastFavMovies = ['Movie 1','Movie 2','Movie 3'];
for (var i = 0; i < movies.length; i++){
    window.console.log('Movies I like: ' + movies[i]);
}for (var i = 0; i < movies.length; i++){
    window.console.log(`Movies I regret watching: ${leastFavMovies[i]}`);
}

// add 'Movies I like:' befor each item in the movies array
for(let i = 0; i < movies.length; i++) {
    movies[i] = 'Movies I like: ' + movies[i];
    console.log( movies[i] + '.');
}
console.log(movies);

// add 'Movies I like:' befor each item in the movies array
for(let i = 0; i < movies.length; i++) {
    movies[i] = 'Movies I regret watching: ' + movies[i];
    console.log( movies[i] + '.');
}
console.log(movies);

//STEP 9

//STEP 10

//STEP 11

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
    employees[i] = employees[i];
    console.log( employees[i] + '.');
}
console.log(employees);
//STEP 15-Add (at the end of the array)a new item using PUSH 
employees = movies.push("Iris");
console.log(employees);

//STEP 16

//STEP 17
var employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally']; 
function showEmployee() {
    employees = employees.toUpperCase();
    for (var i = 0; i < employees.length; i++){
        window.console.log(employees[i]);   
    }
}
window.console.log();


//STEP 18
function filterValue() {
    window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
}

//STEP 19 -Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.
var randomItem = [1,2,3,4,5,6,7,8,9,0];
var randomAll = randomItem[Math.floor(Math.random()*randomItem.length)];
for(var i = 0; i < randomAll.length; i++) {
    console.log(randomAll);
}
console.log(randomAll);
//STEP 20
var arrayNums = [1,2,3];
var max = arrayNums.reduce(function(a, b) {
    return Math.max(a, b);
});

//bigger number
console.log(Math.max(1, 3, 2));

//bigger number
const array1 = [15, -3, 22];
console.log(Math.max(...array1));