// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     };
//     static describe(subject) {
//         return `${subject.name} is ${subject.age} years old.`; 
//     }
//     greet(greeting) {
//         return `Hello, I am ${this.name}. I am ${this.age} years old. This conversation is ${greeting}!`
//     }
// }

// const me = new Person("Kyra", 25);
// const chris = new Person("Chris", 25)

// console.log(Person.describe(chris));
// console.log(me.greet("super awkward"));
// console.log(chris.greet("unnecessary"))

//  ANOTHER WAY to do the same thing
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     };
//     describe() {
//         return `${this.name} is ${this.age} years old.`; 
//     }
// }

// const me = new Person("Kyra", 25);
// console.log(me.describe());

///////////////////////////////////////////////////////////////////////////

// 1- Write code to make daughter inherit properties from mom. What are the daugther's properties and their values? Print them out.

// 2- Add a method called showInfo to mom by attaching a function to it as a property. Calling this method will print out all four properties. Call this method on both mom and daugther.

// var mom = {
//     firstName: 'Alice',
//     lastName: 'Wong',
//     eyeColor: 'brown',
//     hairColor: 'black',
//     showInfo() {
//         console.log(mom.firstName,mom.lastName,mom.eyeColor,mom.hairColor)
//     }
// };

// var daughter = {
//     firstName: 'Ilene',
//     hairColor: 'brown'
// };

// daughter.__proto__ = mom;
// console.log(`The mom's name is ${mom.firstName} ${mom.lastName} and her eyes are ${mom.eyeColor} and hair is ${mom.hairColor}.`);
// console.log(`Her daughter is ${daughter.firstName} ${daughter.lastName} and her eyes are ${daughter.eyeColor} and hair is ${daughter.hairColor}.`);

///   OR   ///

class Parent {
    constructor(firstname,lastname = 'Wong',eyecolor = 'brown',haircolor) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.eyecolor = eyecolor;
        this.haircolor = haircolor;
    }
}

class Child extends Parent{
    constructor(firstname,lastname,eyecolor,haircolor) {
        super(null,lastname,eyecolor,null);
        this.firstname = firstname;
        this.haircolor = haircolor;
    }
}

const mom = new Parent('Alice', 'Wong', 'blue', 'black')
const dad = new Parent('Bob', 'Wong', 'brown', 'brown')
const daughter = new Child('Ilene', 'brown')
const son = new Child('Richard', 'blonde')

console.log(mom)
console.log(dad)
console.log(daughter)
console.log(son)