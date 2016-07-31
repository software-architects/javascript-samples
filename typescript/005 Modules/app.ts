import * as myModule from './module';
import MyThirdClass from './anotherModule';

var c1 = new myModule.MyFirstClass();
console.log(c1.greeting);

var c2 = new myModule.MySecondClass();
console.log(c2.greeting);

var c3 = new MyThirdClass();
console.log(c3.greeting);
