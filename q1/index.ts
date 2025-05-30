class Car {
  public color: string;
  public readonly brand: string;
  private engineOn:boolean = false;

  constructor(color: string, brand: string) {
    this.color = color;
    this.brand = brand;
  }
  display(): void {
    console.log(`This is a ${this.color} ${this.brand}`);
  }
  protected startEngine(){
    this.engineOn = true;
    console.log(`${this.brand} engine has started`)
  }
}

const bmw = new Car("blue", "BMW");
bmw.color = "Mercedes";
bmw.display();

class SportsCar extends Car{
  boost() {
    return this.startEngine();
  }
}

const bugatti = new SportsCar("red", "Bugati")
bugatti.boost();

class Person {
  name: string;
  height: number;
  complexion: string;
  constructor(name: string, height: number, complexion: string) {
    this.name = name;
    this.height = height;
    this.complexion = complexion;
  }
  sleep(): void {
    console.log(`${this.name} is sleeping`);
  }
}

// const person1 = new Person("Daniel", 1.75, "dark");
// person1.sleep();

function sayHello(name: string, age: number): { name: string; age: number } {
  console.log(`Good morning, My name is ${name} and I am ${age} years old`);
  return { name, age };
}

class Student {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    // this.intro();
  }
  intro(): void {
    console.log(
      `Good morning, My name is ${this.name} and I am ${this.age} years old`
    );
  }
}

class Animal {
  name: string;
  skinType: string;
  
  constructor(name:string, skinType:string) {
    this.name = name;
    this.skinType = name;
  }
  makeSound(): void {
    console.log(`${this.name} is making a sound`);
  }
}
// const animal = new Animal("Dog", "furry");
// console.log(animal)
// animal.makeSound();

class Dog extends Animal{
  static jump(name:string){
    console.log(name)
  }
  breed: string;
  constructor(name:string, skinType:string, breed:string){
    super(name, skinType);
    this.breed = breed
  }
  makeSound(): void {
    super.makeSound();
    console.log("This sound is barking");
    // console.log(`${this.name} is barking whoof!!`);
  }
}

const dog1 = new Dog("Bingo", "Fur", "German shepherd")
dog1.makeSound();
Dog.jump("James");

class User{
  public username:string;
  public role: string;

  constructor(username:string, role: string){
    this.username = username;
    this.role = role;
  }
}