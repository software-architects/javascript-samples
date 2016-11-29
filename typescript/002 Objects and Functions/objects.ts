// Note that some code lines are commented in this sample. They
// would lead to compiler errors.

const anObject = { firstName: 'Foo', lastName: 'Bar', age: 99 };
anObject.firstName = 'John';

//anObject.anything = '...';
//anObject.age = "99";

// Note optional "age" in the following declaration
let anotherObject: { firstName: string, lastName: string, age?: number };
anotherObject = { firstName: 'Foo', lastName: 'Bar' };

// Object destructuring. For details see http://www.typescriptlang.org/docs/handbook/variable-declarations.html.
// Note renaming of 'firstName' and default value for 'age'.
const { firstName: givenName, lastName, age = 0 } = anotherObject;
console.log(givenName);

// Object destructuring with type alias
type MyPerson = { firstName: string, lastName: string, age: number };
const mp: MyPerson = { firstName: 'John', lastName: 'Doe', age: 42 };
const { firstName, age: localAge } = mp;

// Object destructuring in function.
// BTW - note IIFE (Immediately Invoked Function Expression) here.
(function ({ firstName, age }: MyPerson) {
    console.log(`Hello ${firstName}! Your are ${age} years old.`);
})(mp);
