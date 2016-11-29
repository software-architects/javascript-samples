// Learn more about basic types in http://www.typescriptlang.org/docs/handbook/basic-types.html

// Note that some code lines are commented in this sample. They
// would lead to compiler errors.

// Tip: Compile this sample in the command line with 'tsc basicTypes.ts'
//      Try various compiler switches in the command line (details see below).
//      Type putting compiler switches in 'tsconfig.json'

// Basic data type 'boolean'
let aBoolean: boolean = false;
let anotherBoolean = false;     // Note type inference here
// Details: http://www.typescriptlang.org/docs/handbook/type-inference.html
//aBoolean = 5.0;

// Basic data type 'number' (=floating point value)
let decimal: number = 6;
let hex: number = 0xf00d;       // Note hex constant
let binary: number = 0b1010;    // Note binary constant
let octal: number = 0o744;      // Note octal constant

// Basic data type 'string'
let aString: string = "Hello World";
aString = 'Hello World';
let aTemplateString = `I say: ${aString}`;
// Note template string
let aMultilineString = `We like Typescript
    especially with Angular`;

// Basic data type 'any'
let anything: any = false;
anything = 5.0;
let arrayOfAnything: any[] = [1, new Date(), 'Foo Bar', false];

// Note the type assertation here. The following lines do no runtime checking!
let aDecimal: number = <number>anything;
let aSecondDecimal: number = anything as number;

// Basic type 'Array'
let aList: number[] = [1, 2, 3, 4];
let aListWithDifferentTypes: (number | string)[] = [1, 'Hello'];
// Note 'Union Type' here
let anotherList = [1, 2, 3];
let yetAnotherList: Array<number> = [1, 2, 3];

// Special array type 'ReadonlyArray'.
let readOnlyArray: ReadonlyArray<number> = aList;
//readOnlyArray.push(42);
aList = <number[]>readOnlyArray;// Note that type assertation is possible

// Note typesafe array operations.
aList.push(5);
//aList.push('Foo Bar');

// "Array destructuring". For details see http://www.typescriptlang.org/docs/handbook/variable-declarations.html.
// Note "...rest" syntax (works in functions for additional, optional parameters, too)
let [first, second, ...rest] = aList;
console.log(first);             // 1
console.log(second);            // 2
console.log(rest);              // [3, 4, 5]
[second, first] = [first, second];
// Note how it works with existing variables, too
console.log(first);             // 2

// Basic type 'Tuple'
let aTuple: [number, string] = [1, 'Hello'];
let aListOfTuples: Array<[number, string]> = [[1, 'Hello'], [2, 'World']];

// Note typesafe access of tuple members.
let numberInTuple: number = aTuple[0];
let stringInTuple: string = aTuple[1];
//numberInTuple = aTuple[1];
aTuple[3] = 'Foo Bar';
let newMember = aTuple[3];      // newMember now has type (number | string)          
// aTuple[4] = true;

// Basic type 'enum'
enum Color { Red, Green, Blue };  // Note that first enum starts with value 0
let anEnum: Color = Color.Green;// Assignment; anEnum gets value 1
anEnum = 2;                     // Note assignment of value
enum Color2 { Red = 0b001, Green = 0b010, Blue = 0b100 };
let enumName: string = Color[2];// Note getting string name from enum (here 'Blue')
enumName = Color[anEnum];

enum AccessMode { 
    Read = 0b01, 
    Write = Read << 1,          // Write becomes 0b10
    ReadWrite = Read | Write    // Note computed member 
};
console.log(AccessMode[3]);     // Prints 'ReadWrite'

// Basic types 'void', 'undefined', and 'null'.
let dummy: void = undefined;
//dummy = 1;
function notReturnAnything(): void { console.log('Foo Bar'); };

// Note that the following two lines do not work if you compile with
// the 'strictNullChecks' option. It is recommended to always use this option.
dummy = null;
aString = undefined;

// 'Nullable' types
function log(message?: string): void { console.log(message || 'empty'); };
log();
log(null);                      // Only works without 'strictNullChecks' option
log('Foo Bar');
function log2(message: (string | null)): void { console.log(message || 'empty'); };
log2(null);

// Basic type 'never'
function veryFriendly(): never { while (true) { console.log('Hello!'); } };
function notImplemented(): never { throw new Error('Not yet imlemented.'); };
//function doesNotWork(): never { return 42.0; };

// Constants.
// Tip: If you do not plan to alter a variable, always use 'const'
//      instead of 'var' or 'let'.
const aConstant: number = 9;
//aConstant = 42;

// Function types
let aFunc: (x: number, y: number) => number;
aFunc = (a, b) => a * b;

// Type aliases
type NullableStringArray = Array<string | null>;
let anArray: NullableStringArray = [];
anArray.push('Foo Bar');
anArray.push(null);
//anArray.push(42);
