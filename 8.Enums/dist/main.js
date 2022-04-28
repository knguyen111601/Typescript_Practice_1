/////////////////////////////////////////////////////////////////
// How to use Enums in TypeScript
/////////////////////////////////////////////////////////////////
// What is enums?
// Enumerals
// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2
// }
// Each value of the key will be its spot (index)
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["NotStarted"] = 0] = "NotStarted";
    StatusEnum[StatusEnum["InProgress"] = 1] = "InProgress";
    StatusEnum[StatusEnum["Done"] = 2] = "Done";
})(StatusEnum || (StatusEnum = {}));
console.log(StatusEnum.InProgress); // Logs 1 as "inProgress is at index 1
// EXAMPLE
// Datatype of this is the enum Status and initialized as the index of NotStarted
var notStartedStatus = StatusEnum.NotStarted;
// Then, we can change it to another value from the enum as the datatype is the enum 
notStartedStatus = StatusEnum.Done;
