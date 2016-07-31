let anObject = { firstName: 'Foo', lastName: 'Bar', age: 99 };
anObject.firstName = 'John';

// These would be a errors:
//anObject.anything = '...';
//anObject.age = "99";

let { firstName: givenName, lastName, age } = anObject; // "Object destructuring""
console.log(givenName);

// Note optional "age" in the following declaration
let anotherObject: { firstName: string, lastName: string, age?: number };
anotherObject = { firstName: 'Foo', lastName: 'Bar' };

