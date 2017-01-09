import { EventEmitter } from 'events';
import * as chalk from 'chalk';
import * as async from 'async';


// ==== Async Programming with Event Emitter ======================================================
// For details see Node.js docs https://nodejs.org/api/events.html

class Calculator extends EventEmitter {
    div(x: number, y: number) {
        if (!y) {
            // Emit an error because division is not possible
            calcEmitter.emit(
                "calculated",   // Event name
                "Div by zero"); // Error information
            return;
        }

        // Simulate long-running division by using setTimeout
        setTimeout(() => calcEmitter.emit("calculated", null, (x / y).toString(), 1000));
    }
}

// Use async method with events
const calcEmitter = new Calculator();
calcEmitter.on("calculated", (err: any, msg: string) => {
    if (err) {
        console.log(chalk.red(`Error: ${err}`));
        return;
    }

    console.log(msg);
});
calcEmitter.div(84, 2);


// ==== Async Programming with Callbacks ==========================================================

function divAsync(x: number, y: number, callback: (err: any, msg: string) => void) {
    if (!y) {
        callback("Div by zero", null);
        return;
    }

    setTimeout(() => callback(null, (x / y).toString()));
}

function printAsync(msg: string, callback: (err: any) => void) {
    setTimeout(() => {
        console.log(msg);
        callback(null);
    }, 1000);
}

// Use async method with callbacks
divAsync(10, 5, (err, msg) => {
    if (err) {
        console.log(chalk.red(`Error: ${err}`));
        return;
    }

    printAsync(msg, err => {
        if (err) {
            console.log(chalk.red(`Error: ${err}`));
        }
    });
});

// Use async package to enhance async call patterns
// (for details see http://caolan.github.io/async/docs.html)
async.waterfall([
    (callback: any) => callback(null, 84, 2),
    divAsync,
    printAsync
], err => {
    if (err) {
        console.log(chalk.red(`Error: ${err}`));
    }
});


// ==== Async Programming with Promises and async/await ===========================================

function divWithPromise(x: number, y: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (!y) {
            reject("Div by zero");
            return;
        }

        setTimeout(() => resolve((x / y).toString()));
    });
}

function printWithPromise(msg: string): Promise<any> {
    return new Promise((resolve, _) => {
        setTimeout(() => { console.log(msg); resolve(); }, 1000);
    });
}

// Use promises with async/await
async function run() {
    try {
        const result = await divWithPromise(84, 0);
        await printWithPromise(result);
    } catch (err) {
        console.log(chalk.red(`Error while printing: ${err}`));
    }
}

run();


// ==== Async Programming with Promises and async/await ===========================================

// Function signature with callback
function divAsyncPromise(x: number, y: number, callback: (err: any, msg: string) => void): void;

// Function signature with Promise
function divAsyncPromise(x: number, y: number): Promise<string>;

// Generic function implementation
function divAsyncPromise(x: number, y: number, callback: (err: any, msg: string) => void = null): (void | Promise<string>) {
    if (!y) {
        const errorInfo = "Div by zero";
        if (callback) {
            callback(errorInfo, null);
            return;
        } else {
            // Note how we can create a rejected Promise
            return Promise.reject(errorInfo);
        }
    }

    const businessLogic = (x: number, y: number) => (x / y).toString();

    if (callback) {
        setTimeout(() => callback(null, businessLogic(x, y)));
    } else {
        return new Promise((resolve) => {
            setTimeout(() => resolve(businessLogic(x, y)));
        });
    }
}

divAsyncPromise(84, 2, (_, msg) => console.log(msg));
divAsyncPromise(84, 2).then(msg => console.log(msg));
