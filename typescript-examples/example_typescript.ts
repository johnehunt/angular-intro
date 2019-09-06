class Bag<T> {
    content: T;
    constructor(x: T) {
        this.content = x;
    }
    print(): void {
        console.log(this.content);
    }
}

let bag: Bag<string> = new Bag<string>('John');
bag.print();

function prettify<T>(arg: T): string {
    return "'" + arg + "'";
}

let temp = prettify(42);
console.log(temp);

function concat(first: string, second: string): string {
    return first + ' ' + second;
}

function concat_all(first: string, ...rest: string[]) {
    return first + ' ' + rest.join(' ');
}

abstract class Person {

    constructor(private name: string, private age: number) { }

    abstract say_hello(): void;

    toString(): string {
        return `${this.name} (${this.age})`;
    }
}

interface CompanyWorker {
    do_work(): void;
}

class Employee extends Person implements CompanyWorker {

    constructor(name: string, age: number, private id: string) {
        super(name, age);
    }

    do_work(): void {
        console.log('Do work');
    }

    public say_hello(): void {
        console.log('Hello');
    }

    toString(): string {
        return super.toString() + ` - ${this.id}`;
    }
}

let e1: Employee = new Employee("Phoebe", 22, "A122");
console.log('e1: ' + e1);
e1.say_hello();
