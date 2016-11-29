// Learn more about 'var' and 'let' in http://www.typescriptlang.org/docs/handbook/variable-declarations.html

// Tip: Why not trying 'ts-node' for running this sample?
//      Details: https://github.com/TypeStrong/ts-node

// If possible, don't use 'var' in your code anymore. 'let' protects
// you from unnecessary mistakes.
function printSquareWithMistake(sideLength: number) {
    for (var i = 0; i < sideLength; i++) {
        var line = 'dummy';
        var line = '';          // This is a mistake, but it works with 'var'

        // Note that 'i' is declared a second time. As 'var' variables
        // are function-scoped, this is a bug! 
        for (var i = 0; i < sideLength; i++) {
            line += '*';
        }

        console.log(line);
    }
}
printSquareWithMistake(3);

console.log();

// Note how problem of previous sample is solved with 'let'. Don't forget
// to compile with '-t ES5' and '-t ES2015' and compare the JavaScript results. 
function printSquare(sideLength: number) {
    for (let i = 0; i < sideLength; i++) {
        let line = '';
        //let line = 'dummy';
        for (let i = 0; i < sideLength; i++) {
            line += '*';
        }

        console.log(line);
    }
}
printSquare(3);

// Variable capturing with 'let';
function getGreetingFactory(firstName: string): () => string {
    let greeting = `Hello ${firstName} (${Date.now()})`;
    return () => greeting;      // Note capturing of 'greeting' here.
}
const greeter = getGreetingFactory('John');
console.log(greeter());
setTimeout(() => console.log(greeter()), 10);
setTimeout(() => console.log(getGreetingFactory('John')()), 10);

function veryFriendlyGreeter(firstName: string): void {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(`${i + 1}: Hello ${firstName}!`), 50);
    }

    for (let j = 0; j < 3; j++) {
        // Note correct capturing of 'j' because of 'let'.
        setTimeout(() => console.log(`${j + 1}: Hello ${firstName}!`), 50);
    }
}
veryFriendlyGreeter('John');