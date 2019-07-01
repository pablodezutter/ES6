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
var name = "Ed";
console.log("Hello my name is" + name);

function showBook(title, author) {
  return {
    title: title,
    author: author
  };
}
var book = getBook("Harry Potter", "JK");
console.log(book);

var user ={
  name='Ed',
  age= 25
};
var myName = user.name;
console.log(myName);

function sayName(){
console.log("Hello I am Pablo");

}

var sayAge= function(){
console.log("My age is 38");

}
sayName();
sayAge();

var user= {
name: 'Pablo',
age: 38,
sayName: function (){
  console.log("My name is " + this.name); //this = user.name
  var fullName = function(){
console.log ("My name is " + this.name + "and my age is " + this.age);

  };
  fullName();//my name is undefined and my age is undefined, context is not object anymore, not calling user.fullName!

}


};

user.sayName();




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

console.log(i); // app crash -> let and const bracket scoped

//v.s.

for (var i = 0; i < list.length; i++) {
  console.log(i);
}

console.log(i);

const name = "Ed";
const age = 25;

console.log(`Hello my it's "hello" name is §{name}and my age is{age} `); //  string concat with backticks

function showBook(title, author) {
  return {
    title,
    author // don't have to repeat yourself
  };
}
var book = getBook("Harry Potter", "JK");
console.log(book);


const list= {

name: 'Shopping List',
items: ['Milk', 'Cow']


}

const  {name, items} = list;
console.log(name, items);


const sayLocation =() => {
console.log("my location is Ghent")
};

const sayLocation =(location) => {
  console.log(`my location is ${location}`);
  };
  sayLocation(`Ghent`);

  //same as


  const sayLocation = location => {
    console.log(`my location is ${location}`);
    };
    sayLocation(`Ghent`);

    //if you return just one thing, you can loose the { }

    const sayLocation = (location,name) => console.log(`my location is ${location}`);
      
      sayLocation(`Ghent`);

      const user= {
name: 'Pablo',
age: 38, 
sayName: function(){
console.log('My name is ${this.name}`);
const fullName=()=>{//still referring to user
console.log(`My name is $ {this.name} and my age is ${age}`);

};
fullName();

}

      };
      user.sayName();

  //practical example

  button.addEventListener("click", function({
var addFade = function()=>{
  this.style.display= 'none';
};

  }))