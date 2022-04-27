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

////////////////////////////////////////////////
// Functions in TS
////////////////////////////////////////////////

const getFullName = (name: string, surname: string): string => {
    // string return is specified after parameters
    return name + " " + surname
}

console.log(getFullName("Kenny", "Nguyen"))
    // If the parameters aren't declared => 
    // getFullName(name: any, surname: any): string


