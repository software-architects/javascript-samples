import * as Rx from 'rxjs/Rx';

// Samples for creating observables
// Read more at http://reactivex.io/documentation/operators.html
Rx.Observable.from([1, 2, 3]).forEach(v => console.log(v));
Rx.Observable.range(1, 3).forEach(v => console.log(v));

// Note that the following two lines do not block the program. They
// execute the observer code asynchronously.
Rx.Observable.interval(1000).take(3).forEach(v => console.log(v + 1));
Rx.Observable.timer(1000, 0).take(3).forEach(v => console.log(v + 1))
    // Note how we use the returned promise to execute code once 
    // observing is finished.
    .then(_ => console.log("Done!"));

// Subscribing and unsubscribing
// Note that we create an "endless" interval here -> to stop the subscription,
// we have to explicitly unsubscribe.
const subscription = Rx.Observable.interval(250).subscribe(
    v => console.log(v));
console.log(subscription.closed);
setTimeout(() => {
    subscription.unsubscribe();
    console.log(subscription.closed);
}, 1000);

// Combining observables
const o1 = Rx.Observable.from([1, 2]);
const o2 = Rx.Observable.from([3, 4]);
const o3 = o1.concat(o2);
o3.forEach(v => console.log(v));

// Try `concat` and `merge` with async code...
const asyncO1 = Rx.Observable.interval(1000).map(v => v + 1).take(3);
const asyncO2 = Rx.Observable.interval(2000).map(v => (v + 1) * 10).take(3);
const asyncO3 = asyncO1.concat(asyncO2);
// const asyncO3 = asyncO1.merge(asyncO2);
asyncO3.forEach(v => console.log(v));

// Error handling
const o = Rx.Observable.from([1, 2]).concat(
    Rx.Observable.throw(new Error("Something happened...")));
o.subscribe(
    v => console.log(v),
    err => console.log(`ERROR: ${err.message}`));

// Having fun with some more operators

// Try with and without debounce
Rx.Observable.interval(10).map(v => 1).take(5)
    .merge(Rx.Observable.timer(1000, 10).map(v => 2).take(5))
    .debounceTime(100)
    .forEach(v => console.log(v));
