# YDKJS - exercises

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-7d8cju)

## COMPILER THEORY
3 steps:

- Tokenizing/lexing: breaking up a string of characters into  meaninful chunks (tokens). var a = 2;, broken up into: var, a, =, 2, ;
Stateful parsing rules for tokenizer are called lexing.

- Parsing: create array of tokens and create AST (Abstract Syntax Tree). var a = 2;

```
                VariableDeclaration
               /            \
              /               \
  Identifier ( value a)     Assignment Expression
                                \
                                  \
                                  NumericLiteral ( value is 2 )
```

- Code Generation: turn AST into executable code, set of machine instructions. Create a variable called a ( reserve memory etc ), and then store a value into and

In JS code compilation occurs microseconds before its executed

What happens here?
```
var a = 2;
```
compiler asks scope if a variable already exists in the scope. If so, compiler ignores the declaration and moves on. If not, compiler asks a scope to declare a new variable called a in that scope.
Then it proceedes with a = 2 assignment. Code engine runs will ask Scope if there is a variable called a in current scope. If so it uses that variable, if not looks elsewhere. Once it finds a variable, it will assign a value, is not throw an error.

TWO SEPARATE ACTIONS: 
- Declaration .
- And then while executing, variable lookup and assignment if found.
ALL declarations are proceeded first, then EXECUTIONS.

### LHS vs RHS

LHS - appears on the left side of assignment. Try to find container itself.
RHS - go get the value of ...

### Scope
Set of rules for looking up variables by their identifier name. Scopes are nested inside other scopes. If a variable cannot be found in immediate scope, it will look up for it in outer containing scope, continuing until the outermost ( global ) scope.

JS has function scope. Each function creates its own bubble.

### Hoisting
```
console.log(a);
var a = 2;
```
gets compiled to :
```
var a;
console.log(a);
a = 2;
```
Hoisting works per scope. Both variable and function declarations get hoisted. Functions are hoisted before variables. Declarations are ignored, and aubsequent function declarations do override previous ones.

```
fooHoisting(); // 1 is being logged
var fooHoisting;

function fooHoisting() {
  console.log(1);
}

fooHoisting = function() {
  console.log(2);
}
```

gets compiled to:

```
function fooHoisting() {
  console.log(1);
}

fooHoisting();

fooHoisting = function() {
  console.log(2);
}
```

### Closure
Lexical scope is the set of rules about how engine can look up a variable and where it will find it. Its defined at author time, when code is written ( assuming no cheating with eval() or with() ).

Dynamic scope is determined at runtime
```
function foo() {
  console.log(a); // 2
}

function bar() {
  var a = 3;
  foo();
}

var a = 2;

bar();

```
Lexical scope holds the RHS reference to a in foo() will be resolved to the global a variable. Dynamic scope does not concern itself with that, is interested only with where it was called from.

Let has block scope, so
```
{
  let a = 2;
}
console.log(a); // reference error
```

if we are not in ES6 env, it could be done this way: ( MIND: BLOWN )
```
try{ throw 2 } catch(a) {
  console.log(2);
}
console.log(a); // reference error 
```
