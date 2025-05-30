class Shape {
  protected _name: string; // Declare the property here

  constructor(name: string) {
    this._name = name; //Protected member
  }

  display(): void {
    console.log(`Shape: ${this._name}`);
  }
}

class Rectangle extends Shape {
  #length: number;
  #width: number;

  constructor(name: string, length: number, width: number) {
    super(name);
    this.#length = length; //Private
    this.#width = width;
  }

  area(): number {
    return this.#length * this.#width;
  }

  display(): void {
    super.display();
    console.log(`Area: ${this.area()}`);
  }
}

// I. Create an instance of Rectangle
const rect = new Rectangle("My Rectangle", 5, 10);

// II. Call the display() method
rect.display();
