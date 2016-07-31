let aBoolean: boolean = false;
let anotherBoolean = false;

// The following statement would lead to an error
//aBoolean = 5.0;

let anything: any = false;
anything = 5.0;

// Note that the following line does not do any runtime checking
let aDecimal: number = <number>anything;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let aString: string = "Hello World";
let aTemplateString = `I say: ${aString}`;

let aList: number[] = [1, 2, 3, 4];
let aListWithDifferentTypes: (number | string)[] = [1, 'Hello'];
let anotherList = [1, 2, 3];
let yetAnotherList: Array<number> = [1, 2, 3];

// "Array destructuring".
// Note "...rest" syntax (works in functions for additional, optional parameters, too)
let [first, second, ...rest] = aList; 

let aTuple: [number, string] = [1, 'Hello'];
let aListOfTuples: Array<[number, string]> = [[1, 'Hello'], [2, 'World']];

enum Color {Red, Green, Blue};
let anEnum: Color = Color.Green;

const aConstant: number = 9;

// Function type
let aFunc: (x: number, y: number) => number;
aFunc = (a, b) => a * b;

