// Typing and Enum
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1, true, "a", false]

// const ColorRed = 0
// const ColorGreen = 1
// const ColorBlue = 2

// enum Color { Red, Green, Blue}
// let backgroundColor = Color.Red

// TYPE ASSERTION
// Set type after declaration
// let message;
// message = "abc";

// Use string intellisense 
// let endsWithC = (<string>message.endsWith("c"))
// let alternativeWay = (message as string).endsWith("c")


// CUSTOM TYPES

// Interface defines the shape of an object
interface Point {
    x: number,
    y: number,
    draw: () => void
}

// Inline annotation in the parameter
// let drawPoint = (point: { x: number, y: number }) => {
//     // ... 
// }

let drawPoint = (point: Point) => {
    // ...
}

let getDistance = (pointA: Point, pointB: Point) => {
    // ...
}

drawPoint({
    x: 1,
    y: 2
})

