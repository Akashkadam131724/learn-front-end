class Car {
  constructor(brand, model, year) {
    // Constructor is called when you create a new instance of the class
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Method to display car details
  getCarInfo() {
    return `${this.brand} ${this.model} (${this.year})`;
  }
}

// Creating an instance of the class
const myCar = new Car("Toyota", "Corolla", 2020);

console.log(myCar.getCarInfo()); // Output: Toyota Corolla (2020)
