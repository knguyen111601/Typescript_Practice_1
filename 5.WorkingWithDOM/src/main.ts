////////////////////////////////////////////////////////////////////
// Working with DOM
////////////////////////////////////////////////////////////////////
// Accessing Elements and Their Properties

const someElement = document.querySelector(".foo") as HTMLInputElement // If we want .foo to be input
// someElement: document
// TypeScript does not see our markup. It only knows that we are working with DOM element

// .foo is set as HTMLInputELement any now we can access the properties of inputs
console.log("someElement", someElement.value)

////////////////////////////////////////////////////////////////////
// ADD LISTENER 

// event: event
// event is highest in class hierarchy 
someElement.addEventListener("blur", (event)=>{
    const target = event.target as HTMLInputElement
    console.log("event", target.value)
})

////////////////////////////////////////////////////////////////////

// Important to use "any" keyword when accessing DOM in typescript as TypeScript cannot see out dom