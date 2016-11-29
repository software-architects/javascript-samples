// Learn more about functions in http://www.typescriptlang.org/docs/handbook/functions.html

// Note that some code lines are commented in this sample. They
// would lead to compiler errors.

// Different types to declar functions:
function add(x: number, y: number) { x + y };
const addLambdaWithoutTypes = (x, y) => x + y;
// Note that addLambdaWithoutTypes uses 'any'
const addLambda: (x: number, y: number) => number =
    (x: number, y: number) => x + y;
const addLambdaShorter: (x: number, y: number) => number =
    (x, y) => x + y;            // Note that 'x' and 'y' are 'number'
// because of type inference.

// Optional and default parameters
function greetWithOptional(name: string, greeting?: string) {
    console.log(`${greeting || 'Hello'} ${name}!`);
};
greetWithOptional('John');

function greetWithDefault(name: string, greeting = 'Hello') {
    console.log(`${greeting} ${name}!`);
};
greetWithDefault('John');

// '...rest' parameters
function greetGroup(greeting: string, ...names: string[]) {
    for (let name of names) {
        console.log(`${greeting} ${name}`);
    }
};
greetGroup('Hello', 'John', 'Jane');

// Overloads
function generateGreetings(name: string): string;
function generateGreetings(names: string[]): string[];
function generateGreetings(names: any): any {
    if (typeof names === "string") {
        return `Hello ${names}`;
    }
    else {
        let result: string[] = [];
        for (let name of <string[]>names) {
            result.push(`Hello ${name}`);
        }

        return result;
    }
};
console.log(generateGreetings("John"));
console.log(generateGreetings(["Tim", "Jane"]));

// Generic functions
function filter<T>(x: T[], f: (i: T) => boolean): T[] {
    let result: T[] = [];
    for (let item of x) {
        if (f(item)) {
            result.push(item);
        }
    }

    return result;
};
console.log(filter([1, 2, 3, 4, 5], i => i < 3));


