// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); //100 100
age = 200;
console.log(age, age2); //200 100
//Value of age goes into variable at the same time, 
//updating orginal one doesn't change the other one

let name = "Ann";
let name2 = name;
console.log(name, name2);
name = "Lala";
console.log(name, name2); //Lala Ann

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Lux';
console.log(players, team); //[Wes Sarah Ryan Lux] on both!
/*Updating reference to array team caused change in players also!
Arrays will update "back", not like in strings or numbers!*/

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice(); //make a copy of array

// or create a new array and concat the old one in
const team3 = [].concat(players); //another way

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = "oooo lo";
console.log(team4, players);

//Array.from(array)
const team5 = Array.from(players);
team5[3] = "cooool";
console.log(team5, players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
const captain = person;
captain.number = 100; //no! 
console.log(captain, person); //added number to person also!

// how do we take a copy instead?
const captain2 = Object.assign({}, person, {number: 99});
console.log(captain2, person);

// We will hopefully soon see the object ...spread
const captain3 = {...person};
console.log(captain3, person);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const dev = {
    name: 'Ann',
    age: 100,
    social: {
    Twitter: '@devann',
    Facebook: '@anndev'
    }
};
console.log(dev);

const ann = Object.assign({}, dev);
console.log(ann.social);

ann.social.Twitter = '@yolo';
console.log(ann.social);
console.log(dev.social); //also @yolo
//!doesn't go 2 levels deep