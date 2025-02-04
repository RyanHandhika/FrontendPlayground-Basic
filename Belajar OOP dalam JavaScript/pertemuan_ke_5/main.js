// Extend dan Fungsi super
// Extend adalah keyword yang bisa kita gunakan untuk menurunkan properti ataupun method yang dimiliki oleh parent class kepada child class.
// Contoh:
class Animal {
  // parent class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating...`);
  }
}

class Cat extends Animal {
  // child classs
  // kita bisa menambahkan data pada method khusus untuk kucing, tanpa mengubah method parent nya.
  constructor(name, age, lives) {
    super(name, age);
    this.lives = lives;
  }
  miau() {
    console.log("Miiaawww...");
  }
}

class Dog extends Animal {
  // child class
  guk() {
    console.log("guk guk...");
  }
}
