/////////////////////////////////////////////////////////////////////////////
// Working with Classes
/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////

// INTERFACE
interface UserInterface { 
    getFullName(): string
}

// When implemented in class, means the attribute in the interface MUST be utilized

/////////////////////////////////////////////////////////////////////////////
// Classes are sugar around prototype 

class User implements UserInterface {
    private firstName: string
    protected lastName: string
    readonly unchangeableName: string
    static readonly maxAge = 50

    constructor(firstName:string, lastName: string){
        this.firstName = firstName
        this.lastName = lastName
        this.unchangeableName = firstName
    }

    changeUnchangeableName():void {
        // this.unchangeableName = "foo" 
        // works like having constants in your classes
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName
    }
}

// User(firstName: string, lastName: string)
const user = new User("Kenny", "Nguyen")

/////////////////////////////////////////////////////////////////////////////
// PRIVATE
// Private means that we can only use it in the class
// console.log(user.firstName) errors because it is being accessed outside the class 
/////////////////////////////////////////////////////////////////////////////
// PROTECTED 
// Is allowed to use inside classes and children
// Inheritance only
/////////////////////////////////////////////////////////////////////////////
// STATIC
// Only accessible on the class itself and not on its instances
// console.log(user.maxAge) does not exist
// console.log(User.maxAge) does exist
/////////////////////////////////////////////////////////////////////////////
// INHERITANCE 

class Admin extends User {
    private editor: string

    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor():string {
        return this.editor
    }
}

const admin = new Admin("Goop", "Po")

// .getFullName from User class that was inherited here
admin.setEditor(admin.getFullName())
console.log(admin.getEditor())


