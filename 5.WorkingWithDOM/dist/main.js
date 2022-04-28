////////////////////////////////////////////////////////////////////
// Working with DOM
////////////////////////////////////////////////////////////////////
// Accessing Elements and Their Properties
var someElement = document.querySelector(".foo"); // If we want .foo to be input
// someElement: document
// TypeScript does not see our markup. It only knows that we are working with DOM element
// .foo is set as HTMLInputELement any now we can access the properties of inputs
console.log("someElement", someElement.value);
////////////////////////////////////////////////////////////////////
// ADD LISTENER 
// event: event
// event is highest in class hierarchy 
someElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("event", target.value);
});
////////////////////////////////////////////////////////////////////
// Important to use "any" keyword when accessing DOM in typescript as TypeScript cannot see out dom
