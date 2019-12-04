/*
Scope
*/

// RHS reference cannot be found inside foo function, but it is found in surrounding scope ( global )
/*
function foo(a) {
  console.log(a + b);
}
var b = 2;
foo(3); // 5

function foo2(a) {
  console.log(a + b1);
}
foo2(3); // Reference Error. If RHS lookup fails since b1 is not defined, it will throw an error.
*/


/*
in LHS, by contrast, won`t find a variable until global scope, it will be helpful and create one.
if strict mode switched on, Reference Error will be thrown too.

if RHS lookup finds a variable but fails to perform some action on it which is invalid, if will throw a TypeError
*/

fooHoisting(); // 1 is being logged
var fooHoisting;

function fooHoisting() {
  console.log(1);
}

fooHoisting = function() {
  console.log(2);
}

fooHoisting(); // now 2