import $ from 'jquery';

export class Greeter {
    static greet() {
        $("#content").append("Hello World!"); 
    }
}