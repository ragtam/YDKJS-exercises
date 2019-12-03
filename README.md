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

TWO SEPARATE ACTIONS: declaration and then while executing, variable lookup and assignment if found.