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
// foo = "what" errors


// ANY 
// Turns off typescript checks 
let zoo: any = "foo"

