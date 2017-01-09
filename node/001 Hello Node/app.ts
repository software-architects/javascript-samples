// Import of node's file system module. Note that we need to get
// @types/node type definitions for that (see package.json).
import * as fs from 'fs';
import * as chalk from 'chalk';

// Get file name from command line arguments. If no arguments are 
// specified, use greetings.txt. Note that you should use a package
// like command-line-args if you have more complex arguments.
let fileName = process.argv[2] || "greeting.txt";

// Note that there would be a simpler function (fs.readFile) to
// read the content of a file. However, here we want to learn
// about callbacks so we use a more low-level api.

function printError(message: string) {
    console.log(chalk.red(message));
}

// Open the file for reading
fs.open(fileName, "r", (err, fd) => {
    // Note that we have to handle the result in a callback 
    // as node ALWAYS runs IO asynchronously.

    if (err) {
        // Do some error handling
        printError(`Error while opening ${chalk.bgWhite(fileName)}: ${err.message}`);
        return;
    }

    // Allocate a buffer and read content of file into it.
    let buffer = new Buffer(1024);
    fs.read(fd, buffer, 0, 1024, 0, (err, bytesRead, buffer) => {
        if (err) {
            printError(`Error: ${err.message}`);
            return;
        }

        console.log(`Read ${bytesRead}: ${chalk.bgWhite(chalk.black(buffer.toString("utf8", 0, bytesRead)))}`);
    });
});