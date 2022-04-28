////////////////////////////////////////////////////////////////////////////////
// Generics in Typescript
////////////////////////////////////////////////////////////////////////////////
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Big "T" is default name for Generic
// Extends here makes the generic only accept an Object
var addId = function (obj) {
    var id = Math.random().toString(16); // random number with 16 characters
    return __assign(__assign({}, obj), { id: id });
};
var user = {
    name: "Jack",
    data: {
        meta: "foo"
    },
    meta: "bar"
};
var user2 = {
    name: "John",
    data: ["foo", "bar"],
    meta: 1
};
//const result = addId<UserInterface>(user);
// const addId: <UserInterface>(obj: UserInterface) => UserInterface & {
//     id: string;
// }
//console.log("result", result)
////////////////////////////////////////////////////////////////////////////////
// READING FUNCTIONS
// 1:
// export function any<T>(fn: (a: T)=> boolean, list: readonly T[]): boolean
// First, generic, T
// First argument of function is a function with parameter "a" which is type "T", the generic mentioned before
// It must return a boolean
// Next argument is "list" that is type readonly array of "T" 
// The entire function must return a boolean
////////////////////////////////////////////////////////////////////////////////
