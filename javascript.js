// Structure of a Function Literal
// This is an anyonymous function with two paramenters and a statement in the body.
// Every function has two additional parameters: this and arguments

var add = function (a, b) {
	return a + b;
}

// There are 4 patterns of function invocation, and they all differ in how 
// the special 'this' parameter is initiatlized.
// 1. Method Invocation Pattern

// 2. Function Invocation Pattern

// 3. Constructor Invocation Pattern

// 4. Apply Invocation Pattern

// Call and Apply

function Person(opts) {
  this.name = opts.name || "No name";
  return this;
}

Person.prototype.printName = function(arg) {
  console.log('some arg', arguments);
  return this.name;
}

var mash = new Person({name: "mash"});
var devin = new Person({ name: 'Devin' });
console.log(mash.printName(), devin.printName());

var myArr = [1,2,3];

var brad = { name: 'brad' };

console.log(devin.printName.call(mash, 1));
console.log(mash.printName.apply(brad, myArr))

// Chaining methods
var events = {
  anotherMethod: function() {
    console.log("me too");
  }
};

function myFunction() {
  console.log("fired");
  
  this.anotherMethod = function () {
    console.log('another method');
  }
  
//   return {};
  return events;
}

myFunction().anotherMethod();

// recursion

function recurse (i) {
    if(i === 0) return;
    console.log('iteration', i);
    recurse(i-1);
}
recurse(10);

(function (i) {
  if(i === 0) return;
  console.log('iteration', i);
  arguments.callee(i-1);
})(100);