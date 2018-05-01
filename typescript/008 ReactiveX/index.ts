import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { interval } from 'rxjs/observable/interval';
import { of } from 'rxjs/observable/of';
import { range } from 'rxjs/observable/range';
import { _throw } from 'rxjs/observable/throw';
import { timer } from 'rxjs/observable/timer';
import { concat, debounceTime, map, merge, take } from 'rxjs/operators';

// The basics
(function() {
// Note that you can use Observable.create() as an alternative
var observable = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    // observer.error("ERROR");
    observer.next(5);
    observer.complete();
  }, 1000);
});

console.log('just before subscribe');
observable.subscribe({
  next: x => console.log('got value ' + x),
  error: err => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done'),
});
console.log('just after subscribe');
});  //();

// DOM events
(function() {
let counter = 0;
const button = document.querySelector('button');
fromEvent(button, 'click')
    // .pipe(debounceTime(250))
    .subscribe(() => console.log(`Clicked button ${++counter} times...`));
});  //();

// Samples for creating observables
(function() {
// Read more at http://reactivex.io/documentation/operators.html
of([1, 2, 3]).forEach(v => console.log(v));
range(1, 3).forEach(v => console.log(v));

// Note that the following two lines do not block the program. They
// execute the observer code asynchronously.
interval(1000).pipe(take(3)).forEach(v => console.log(v + 1));
timer(1000, 0)
    .pipe(take(3))
    .forEach(v => console.log(v + 1))
    // Note how we use the returned promise to execute code once
    // observing is finished.
    .then(_ => console.log('Done!'));
}); //();

// Subscribing and unsubscribing
(function() {
// Note that we create an "endless" interval here -> to stop the subscription,
// we have to explicitly unsubscribe.
const subscription = interval(250).subscribe(v => console.log(v));
console.log(subscription.closed);
setTimeout(() => {
  subscription.unsubscribe();
  console.log(subscription.closed);
}, 1000);
}); //();

// Combining observables
(function() {
const o1 = of([1, 2]);
const o2 = of([3, 4]);
const o3 = o1.pipe(concat(o2));
o3.forEach(v => console.log(v));

// Try `concat` and `merge` with async code...
const asyncO1 = interval(1000).pipe(map(v => v + 1), take(3));
const asyncO2 = interval(2000).pipe(map(v => (v + 1) * 10), take(3));
const asyncO3 = asyncO1.pipe(concat(asyncO2));
// const asyncO3 = asyncO1.merge(asyncO2);
asyncO3.forEach(v => console.log(v));
});  //();

// Error handling
(function() {
const o = of([1, 2]).pipe(concat(_throw(new Error('Something happened...'))));
o.subscribe(v => console.log(v), err => console.log(`ERROR: ${err.message}`));
});  //();

// Having fun with some more operators
(function() {
// Try with and without debounce
interval(10)
    .pipe(
        map(v => 1), take(5), merge(timer(1000, 10).pipe(map(v => 2), take(5))),
        debounceTime(100))
    .forEach(v => console.log(v));
});  //();
