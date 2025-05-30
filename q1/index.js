"use strict";
class Car {
    constructor(color, brand) {
        this.engineOn = false;
        this.color = color;
        this.brand = brand;
    }
    display() {
        console.log(`This is a ${this.color} ${this.brand}`);
    }
    startEngine() {
        this.engineOn = true;
        console.log(`${this.brand} engine has started`);
    }
}
const bmw = new Car("blue", "BMW");
bmw.color = "Mercedes";
bmw.display();
class SportsCar extends Car {
    boost() {
        return this.startEngine();
    }
}
const bugatti = new SportsCar("red", "Bugati");
bugatti.boost();
class Person {
    constructor(name, height, complexion) {
        this.name = name;
        this.height = height;
        this.complexion = complexion;
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}
// const person1 = new Person("Daniel", 1.75, "dark");
// person1.sleep();
function sayHello(name, age) {
    console.log(`Good morning, My name is ${name} and I am ${age} years old`);
    return { name, age };
}
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.intro();
    }
    intro() {
        console.log(`Good morning, My name is ${this.name} and I am ${this.age} years old`);
    }
}
class Animal {
    constructor(name, skinType) {
        this.name = name;
        this.skinType = name;
    }
    makeSound() {
        console.log(`${this.name} is making a sound`);
    }
}
// const animal = new Animal("Dog", "furry");
// console.log(animal)
// animal.makeSound();
class Dog extends Animal {
    static jump(name) {
        console.log(name);
    }
    constructor(name, skinType, breed) {
        super(name, skinType);
        this.breed = breed;
    }
    makeSound() {
        super.makeSound();
        console.log("This sound is barking");
        // console.log(`${this.name} is barking whoof!!`);
    }
}
const dog1 = new Dog("Bingo", "Fur", "German shepherd");
dog1.makeSound();
Dog.jump("James");
class User {
    constructor(username, role) {
        this.username = username;
        this.role = role;
    }
}
