////////////////////////////////////////////////////////////////////////////////
// Generics in Typescript
////////////////////////////////////////////////////////////////////////////////

// Big "T" is default name for Generic
// Extends here makes the generic only accept an Object
const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16) // random number with 16 characters
    return {
        ...obj,
        id
    }
}

// Adding generics to interface
interface UserInterface<T, V> {
    name: string
    data: T
    // T here lets you give it anything as it is generic
    meta: V
}

const user: UserInterface<{meta: string}, string> = {
    name:"Jack",
    data: {
        meta: "foo"
    },
    meta: "bar"
}

const user2: UserInterface<string[], number> = {
    name: "John",
    data: ["foo", "bar"],
    meta: 1
}

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