////////////////////////////////////////
// Objects
////////////////////////////////////////
interface UserInterface {
    name: string;
    age?: number; // question mark makes it not mandatory
    getMessage(): string // function inside object and string is return value
}

    // Using User interface to define the required attributes of the object
const user: UserInterface = {
    name: "Kenny",
    age: 3,
    getMessage(){
        return "Hello " + this.name
    }
}
    // Javascript has no entity definitions. Meaning what the object must contain (name, age)

const user2: UserInterface = {
    name: "Jack",
    getMessage(){
        return "Hello " + this.name
    }
}

console.log(user.getMessage())