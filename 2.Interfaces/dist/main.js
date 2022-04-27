// Using User interface to define the required attributes of the object
var user = {
    name: "Kenny",
    age: 3,
    getMessage: function () {
        return "Hello" + name;
    }
};
// Javascript has no entity definitions. Meaning what the object must contain (name, age)
var user2 = {
    name: "Jack",
    getMessage: function () {
        return "Hello" + name;
    }
};
console.log(user.getMessage());
