////////////////////////////////////////////////////////
// Any / Void / Never / Unknown
////////////////////////////////////////////////////////

// VOID
// When we dont return something, it returns void
// const doSomething: () => void
// Best practice is to specify void func(): void => {}
const doSomething = () => {
    console.log("doSomething")
}

let foo: void = undefined
// foo = "what", errors

////////////////////////////////////////////////////////
// ANY 
// Turns off typescript checks 
// Try to avoid using any 
let zoo: any = "foo"

////////////////////////////////////////////////////////
// NEVER
// A function returning 'never' cannot have a reachable end point
// Function with never can't be executed to the end
const doAnotherThing = (): never => {
    throw "never";
}

////////////////////////////////////////////////////////
// UNKNOWN
// Alternative to any introduced in TS3
// Cannot assign "unknown" directly in other type 
let vAny: any = 10
let vUnknown: unknown = 10

let s1:string = vAny
// let s2:string = vUnknown // "Type unknown is not assignable to type string"

console.log(vAny.foo)
// console.log(vUnknown.foo)  // "Property foo does not exist on type unknown"

////////////////////////////////////////////////////////
// TYPE ASSERTION 
// Convert one type to another 

let vUnknown2: unknown = 10
let s2: string = vUnknown2 as string;

let pageNumber: string = "1"
// let numericPageNumber: number = pageNumber as number // Must change to unknown first
let numericPageNumber: number = (pageNumber as unknown) as number;