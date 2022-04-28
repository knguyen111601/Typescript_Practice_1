/////////////////////////////////////////////////////////////////////////////
// Working with Classes
/////////////////////////////////////////////////////////////////////////////
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// When implemented in class, means the attribute in the interface MUST be utilized
/////////////////////////////////////////////////////////////////////////////
// Classes are sugar around prototype 
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    User.prototype.changeUnchangeableName = function () {
        // this.unchangeableName = "foo" 
        // works like having constants in your classes
    };
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    User.maxAge = 50;
    return User;
}());
// User(firstName: string, lastName: string)
var user = new User("Kenny", "Nguyen");
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
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var admin = new Admin("Goop", "Po");
admin.setEditor(admin.getFullName());
console.log(admin.getEditor());
