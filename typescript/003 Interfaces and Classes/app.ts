interface IPerson {
    firstName: string;
    lastName: string;
    age?: number;
}

interface IPersonWithDescription extends IPerson {
    getDescription() : string;
}

class Person implements IPerson {
    public firstName: string;
    public lastName: string;
    public age: number;

    public getDescription(): string {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    }
}

class SimplePerson {
    constructor(public firstName: string, public lastName: string) { }

    // Note "contextual typing" in the following function
    public getDescription() {
        return `I am ${this.firstName} ${this.lastName}`;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let p: IPerson;
p = new Person();
p = new SimplePerson('Foo', 'Bar');
console.log((<SimplePerson>p).fullName);
p = { firstName: 'Foo', lastName: 'Bar' };
p = { firstName: 'Foo', lastName: 'Bar', age: 99 };
p = { firstName: 'Foo', lastName: 'Bar', age: 99 };

let pWithDescription: IPersonWithDescription = new Person(); 

// This would be an error:
//p = { firstNme: 'Foo', lastName: 'Bar', age: 99 };

// Function types
interface IAdd { (x: number, y: number): number; }
let add: IAdd = function(a: number, b: number) { return a + b; };
let addLambda: IAdd = (a, b) => a + b;

class VipPerson extends Person {
    public vipLevel: string;

    public getDescription(): string {
        return `${super.getDescription()} and is a VIP`;
    }
}

let vip = new VipPerson();
vip.firstName = 'Foo';
vip.lastName = 'Bar';
vip.age = 99;
console.log(vip.getDescription());

let person: Person = vip;
console.log(person.getDescription());