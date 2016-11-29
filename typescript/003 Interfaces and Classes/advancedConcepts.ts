// Learn more in http://www.typescriptlang.org/docs/handbook/advanced-types.html

// Intersection types
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};

    // Add all members of 'first' to result
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }

    // Add all new members of 'second' to result
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }

    return result;
}

class Shape {
    description: string;
}

interface IVisual {
    draw(): void;
}

class ConsoleVisual implements IVisual {
    draw() {
        console.log(`Drawing ${this["description"]}`);
    }
}

const circle: Shape = { description: "Circle" };
const visualCircle = extend(circle, new ConsoleVisual());
visualCircle.draw();

// Typeguards
function isVisual(item: any): item is IVisual { return item.draw !== undefined; }
const newCircle: Shape = extend(circle, new ConsoleVisual());
//circle.draw();
if (isVisual(newCircle)) {
    // Because of the typeguard, newCircle is now Shape & IVisual
    newCircle.draw();
}

const anotherCircle: any = new Shape();
if (anotherCircle instanceof Shape) {
    // Note the 'instanceof' typeguard here. Because of it,
    // accessing 'description' is typesafe.
    anotherCircle.description = "Circle";
}

// String literal types
class ShapeBase { }
class Circle extends ShapeBase { diameter: number }
class Rectangle extends ShapeBase { width: number }
// Note 'string literal type' here.
function factory(shapeName: "MyCircle" | "MyRectangle"): ShapeBase {
    return shapeName === "MyCircle" ? new Circle() : new Rectangle();
}

// Note string literals with function overloads
function anotherFactory(shapeName: "MyCircle"): Circle;
function anotherFactory(shapeName: "MyRectangle"): Rectangle;
function anotherFactory(shapeName: string): ShapeBase {
    return shapeName === "MyCircle"
        ? new Circle()
        : shapeName === "MyRectangle"
            ? new Rectangle()
            : null;
}
const c1 = anotherFactory("MyCircle");
//c1 = anotherFactory("MyRectangle");

// 'this' type (especially helpful for fluent APIs)
class DeferredQuery<T> {
    protected operations: string[] = [];

    constructor(private items: T[]) { }
    filter(f: (x: T) => boolean): this {
        this.operations.push('filter');
        return this;
    }

    execute() {
        console.log(this.operations);
    }
}

class ExtendedDeferredQuery<T> extends DeferredQuery<T> {
    project(f: (x: T) => T): this {
        this.operations.push('project');
        return this;
    }
}

new ExtendedDeferredQuery([1, 2, 3])
    .filter(i => i < 3)
    .project(i => i * 2)
    .filter(i => i < 3)
    .execute();
