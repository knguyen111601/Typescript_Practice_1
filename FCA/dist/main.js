////////////////////////////////////////////////
// Variables in TS
////////////////////////////////////////////////
// Const
var hello = "world";
// hello: "world"
// reason for type being "world" and not string is because it is constant and cannot be changed
// Let
var bye = "world";
// let bye: string
// bye = true
// this will error: boolean is not assignable to type string
// SPECIFICATION
var specify = "world";
// this is how you explicity declare the type of a variable
////////////////////////////////////////////////
// Functions in TS
////////////////////////////////////////////////
var getFullName = function (name, surname) {
    // string return is specified after parameters
    return name + " " + surname;
};
console.log(getFullName("Kenny", "Nguyen"));
// If the parameters aren't declared => 
// getFullName(name: any, surname: any): string
