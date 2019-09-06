class Person1 {  
    static instances = 0;

    constructor(private name: string, private age: number) {
        Person1.instances++;
    }

    toString(): string { 
        return `${this.name} (${this.age})`;
    } 
}

class Employee1 extends Person1 {
    constructor(name: string, age: number, private id: string) {
        super(name, age);
    }
    toString(): string { 
        return super.toString() + ` - ${this.id}`;
    }
}

let p1 = new Person1("Phoebe", 22);
console.log('p1: ' + p1);
let e = new Employee1("Eloise", 25, '1234');
console.log('e: ' + e);
console.log(Person1.instances);


