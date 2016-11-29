// Learn more about interfaces in http://www.typescriptlang.org/docs/handbook/interfaces.html
// Learn more about classes in http://www.typescriptlang.org/docs/handbook/classes.html

// Note that some code lines are commented in this sample. They
// would lead to compiler errors.

interface IPerson {
    firstName: string;
    lastName: string;
    age?: number;               // Note optional member
}

interface IPersonWithDescription extends IPerson {
    getDescription(): string;
}

class Person implements IPerson {
    public firstName: string;
    public lastName: string;
    public age: number;

    // Note that 'Person' does not explicity say that it is
    // compatible with 'IPersonWithDescription', but it implicitly is
    // because all necessary members are implemented. This concept is called
    // 'structural subtyping' (details in http://www.typescriptlang.org/docs/handbook/type-compatibility.html)
    public getDescription(): string {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    }
}

class SimplePerson {
    // Note that 'SimplePerson' does not explicity say that it is
    // compatible with 'IPerson', but it still is.
    constructor(public firstName: string, public lastName: string) { }

    // Note "contextual typing" in the following function
    public getDescription() {
        return `I am ${this.firstName} ${this.lastName}`;
    }

    // Note accessor here ('set' accessor would also be possible)
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
//p = { firstNme: 'Foo', lastName: 'Bar', age: 99 };

const pWithDescription: IPersonWithDescription = new Person();

// Interface with 'readonly' members
interface IAccount {
    readonly accountNumber: number;
    balance: number;
}

var account: IAccount = { accountNumber: 1, balance: 100 };
account.balance += 10;
//account.accountNumber = 2;

// Function types
interface IAdd { (x: number, y: number): number; }
let addFunc: IAdd = function (a: number, b: number) { return a + b; };
let addFuncLambda: IAdd = (a, b) => a + b;

class VipPerson extends Person {
    public vipLevel: string;

    // Note how we override functionality of the base class
    public getDescription(): string {
        // Note how we call method of the base class
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

class VipSimplePerson extends SimplePerson {
    constructor(public firstName, public lastName) {
        // Note how we call constructor of base class
        super(firstName, lastName);
    }
}

class ImmutablePerson {
    readonly firstName: string;
    constructor(firstName: string, readonly lastName: string) {
        this.firstName = firstName;
    }
}
let ip = new ImmutablePerson('Foo', 'Bar');
//ip.firstName = 'John';

// Note that Typescript also supports things like static members
// and abstract classes just like C#.

// Generic interfaces and classes
interface ICursor<T> {
    readonly current: T;
    moveNext(): boolean;
};
class Cursor<T> implements ICursor<T> {
    private index = -1;

    constructor(private list: ReadonlyArray<T>) { }

    get current(): T {
        if (this.index < 0) {
            throw new Error("moveNext never called");
        }

        return this.list[this.index];
    }

    moveNext(): boolean {
        if (this.list.length == 0 || this.index >= (this.list.length - 1)) {
            return false;
        }

        this.index++;
        return true;
    }
}
let c = new Cursor([1, 2, 3, 4]);
while (c.moveNext()) {
    console.log(c.current);
}

interface ICommented {
    readonly comment: string;
}
class CommentedItems<T extends ICommented> {
    constructor(private items: T[]) { }
    dump(): void {
        this.items.forEach(item => console.log(item.comment));
    }
}
(new CommentedItems([
    { id: 1, comment: "First" },
    { id: 2, comment: "Second" }]))
    .dump();
//(new CommentedItems([1, 2, 3])).dump();