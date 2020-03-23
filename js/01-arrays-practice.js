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
    legs: 4,
    color: "orange",
    working: false
};
        console.log(employee1.name); // dote notation access to the object values
        console.log(employee2["name"]); // bracket notation
        var employees = [employee1, employee2];
        console.log(employees[1].name);   
//STEP 14

//STEP 15

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

//STEP 19

//STEP 20