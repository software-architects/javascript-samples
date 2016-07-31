// Some basic types
var aboolean = true;
var anull = null;
var anundefined;
var anumber = 10.0;
var someNumber = 1.0, otherNumber = 2.0;
var astring = "Hello World";
var anotherString = 'Hello World';
var anObject = {};
var adate = new Date(2015, 12, 31);
var anArray = [1, 2, 3, '4']; // Note: details about array will follow later

// Note: Assigning a value to an undeclared variable creates the variable
globalVariableWithoutVar = 'Hello World!';

// Show all global variables
$(function () {
    var list = $("#globalVars");

    // Note that the window objects serves as the global object
    for (var prop in window) {
        list.append("<li>" + prop + "=" + window[prop] + "</li>");
    }
});