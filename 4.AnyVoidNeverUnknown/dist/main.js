////////////////////////////////////////////////////////
// Any / Void / Never / Unknown
////////////////////////////////////////////////////////
// VOID
// When we dont return something, it returns void
// const doSomething: () => void
// Best practice is to specify void func(): void => {}
var doSomething = function () {
    console.log("doSomething");
};
var foo = undefined;
// foo = "what", errors
////////////////////////////////////////////////////////
// ANY 
// Turns off typescript checks 
// Try to avoid using any 
var zoo = "foo";
////////////////////////////////////////////////////////
// NEVER
// A function returning 'never' cannot have a reachable end point
// Function with never can't be executed to the end
var doAnotherThing = function () {
    throw "never";
};
////////////////////////////////////////////////////////
// UNKNOWN
// Alternative to any introduced in TS3
// Cannot assign "unknown" directly in other type 
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
// let s2:string = vUnknown // "Type unknown is not assignable to type string"
console.log(vAny.foo);
// console.log(vUnknown.foo)  // "Property foo does not exist on type unknown"
////////////////////////////////////////////////////////
// TYPE ASSERTION 
// Convert one type to another 
var vUnknown2 = 10;
var s2 = vUnknown2;
var pageNumber = "1";
// let numericPageNumber: number = pageNumber as number // Must change to unknown first
var numericPageNumber = pageNumber;
