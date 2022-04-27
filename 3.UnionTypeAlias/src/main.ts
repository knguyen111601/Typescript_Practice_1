////////////////////////////////////////////////////////////
// Union Operator
////////////////////////////////////////////////////////////
let username: string = "alex"

// What if we want to allow the variable to be multiple types
let pageName: string | number = "1"

// Very popular reason for union "|" operator is for checking for null 
    // Like how in react you leave something null until data is changed or received
let errorMessage: string | null = null; // default value of null

////////////////////////////////////////////////////////////
// Type Aliases
////////////////////////////////////////////////////////////
type ID = string
type PopularTag = string
type MaybePopularTag = PopularTag | null // combining type alias with union

// Example
interface UserInterface { 
    id: ID; // makes it clearer so it isn't just any kind of string 
    name: string;
    surname: string;
}
let user: UserInterface | null = null 

const popularTags: PopularTag[] = ['dragon', 'coffee'] // array of strings from type alias, "PopularTag"
const dragons: MaybePopularTag = null 