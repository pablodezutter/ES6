//Thank you Dev Ed for your nice YouTubechannel!
//Old school JS

var namesList = ["Ed", "John", "Mike"];
var counter = 10;
var counter = 5; //This is a problem, you can re-define the var

function sayName() {
  var name = "Ed";
  console.log(name);
}
console.log(name);
sayName();

console.log(counter);

//ES 6

const todoList = ["Milk", "Cow"];
todoList = ["Milk"]; // cannot re-assign data

let counter = 10;

counter = 5; // you can re-assign data

//global & functional & block scoping

const list = [1, 2, 3, 4, 5];

for (let i = 0; i < list.length; i++) {
  console.log(i);
}

console.log(i); // app crash -> bracket scoped

//v.s.

for (var i = 0; i < list.length; i++) {
  console.log(i);
}

console.log(i);
