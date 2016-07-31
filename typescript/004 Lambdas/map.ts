var numbers = [1, 2, 3, 4, 5];

numbers.map(n => n * 2)
    .filter(n => n < 10)
    .forEach(n => console.log(n));
