////////////////////////////////////////////////
// Variables in TS
////////////////////////////////////////////////
// Const
const hello = "world";
    // hello: "world"
    // reason for type being "world" and not string is because it is constant and cannot be changed

// Let
let bye = "world";
    // let bye: string
// bye = true
// this will error: boolean is not assignable to type string

// SPECIFICATION
let specify: string = "world";
    // this is how you explicity declare the type of a variable