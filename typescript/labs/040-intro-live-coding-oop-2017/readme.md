# TypeScript Session at OOP

## TypeScript Intro

* Demo basic principles of types in TypeScript including IntelliSense.
  ```
  var x = 'Superman';
  // x = 42; --> Error

  const y: string = 'Batman'; // Note const
  let z: any = 'Deadpool';    // Note let
  z = 42; // No error
  ```

* Talk a bit about [Visual Studio Code](https://code.visualstudio.com)

* Run `.ts` code directly using `ts-node`

* Get `tsc` from *npm*
  * Talk about TypeScript being a Node module
  * Compile `.ts` file
  * Demo `-watch` function
  * Run `tsc --init` and talk about `tsconfig.json`
  * Mention TypeScript plugins for *Gulp* and *Webpack*
  * Demo map files and debugging in VSCode
  * Demo different `target` values (ES5, ES2015)

## TypeScript Type System

* Demo that the type system isn't just about basic types
  * Template strings
    ```
    var answer = 42;
    var s1 = `The answer is ${answer}`;
    ```
  * Type-safe collections and union types
    ```
    var numbers = [1, 2, 3, 4, 5];
    numbers.push(6);
    var numbersAndStrings = [1, '2', 3, '4', 5];
    numbersAndStrings.push('7');
    ```
  * Array destructuring
    ```
    var [first, second, third, ...rest] = numbers;
    [third, first] = [first, third];
    ```
  * Function types
    ```
    function add(x: number, y: number): number {
      return x + y;
    };

    var mathOp: (x: number, y: number) => number;
    mathOp = add;
    console.log(mathOp(21, 21));

    function doSomethingAsync(x: number, y: number, callback: (err: any, result: any) => void): void {
      setTimeout(() => callback(null, x + y), 50);
    };
    doSomethingAsync(21, 21, (_, res) => console.log(res));
    ```

* Interfaces and classes
  ```
  interface IPerson {
    firstName: string;
    lastName: string;
  }

  class Person implements IPerson {
    constructor(public firstName: string, public lastName: string) { }
  }

  class VipPerson extends Person {
    public isVip: boolean;
    constructor(public firstName: string, public lastName: string) { 
      super(firstName, lastName);
    }
  }

  class Employee {
    public firstName: string;
    public lastName: string;
  }

  let p: IPerson;
  p = new Person('Foo', 'Bar');
  p = new VipPerson('Foo', 'Bar');
  p = new Employee();
  p = { firstName: 'Foo', lastName: 'Bar' };
  ```

* Modules
  * Split above sample into two files
  * Export classes and Interfaces
  * Demo module system (*commonjs*, *amd*, *umd*)
  * Demo `.d.ts` generation using `"declaration": true`

## Server-side Programming

* Basic project setup
  * `npm init`
  * `npm install --save-dev typescript`
  * `npm install express body-parser cors --save`
  * `npm install @types/express @types/body-parser @types/cors --save-dev`
  * `tsc --init`

* Create `server.ts` and demo IntelliSense for existing libraries
  ```
  import * as express from 'express';
  import * as cors from 'cors';
  import * as bodyParser from 'body-parser';

  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  interface IPerson {
      firstName: string;
      lastName: string;
  }

  app.get('/api/customers', (req, res) => {
      if (req.header('Content-Type') !== 'application/json') {
          res.status(400).send('Invalid or missing content type');
          return;
      }

      const persons: IPerson[] = [
          { firstName: 'Super', lastName: 'Man' },
          { firstName: 'Cat', lastName: 'Woman' }
      ];

      res.status(200).send(persons);
  });


  app.listen(process.env.port || 1337, () => console.log(`Listening...`));
  ```

* Run it in VSCode and demo REST client
  ```
  GET http://localhost:1337/api/customers
  Content-Type: application/json
  ```

* Run it outside of VSCode and keep it running

## Server-side Programming

* Speak about how we could generate TypeScript/Angular client with *Swagger*

* Generate app with `ng init --skip-tests`

* Run app with `ng serve`

* Open app in VSCode
  * Talk about local TypeScript compiler in VSCode

* Write logic for component and demo IntelliSense
  ```
  import * as https from 'https';
  import { Headers, Http } from '@angular/http';
  import { Component, OnInit } from '@angular/core';

  interface IPerson {
    firstName: string;
    lastName: string;
  }

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements OnInit {
    public customers: IPerson[] = [];

    constructor(private http: Http) { }

    ngOnInit(): void {
      this.http.get("http://localhost:1337/api/customers", {
        headers: new Headers({ "Content-Type": "application/json" })
      })
        .subscribe(response => this.customers = response.json());
    }
  }
  ```

* Write HTML template
  ```
  <h1>
    Customers
  </h1>

  <ul>
    <li *ngFor="let c of customers">
      {{ c.lastName }}, {{ c.firstName }}
    </li>
  </ul>
  ```

* Build app with `ng build` and `ng build --prod`
  * Talk about *Webpack*
  * Talk about TypeScript compiler in the background
