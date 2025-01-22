// Function dalam bahasa pemrograman javascript.
// Function adalah potongan kode yang memungkinkan digunakan kembali.
// Bisa dibuat lebih awal, dan digunakan nanti.
// Function ini juga memungkinkan kita tidak menulis ulang kode yang sudah ada.
// Sehingga kita hanya perlu memanggil nama function nya saja, dengan cara tulis nama function nya, lalu tambahkan tanda ().
// Contoh penulisan dan pemanggilan function.
function sayHello() {
  console.log("Hello Everyone");
}
sayHello();
// Memberikan parameter dan argumen pada funtion.
// Parameter adalah tempat untuk menyimpan argumen (data).
// Argumen adalah data (value) yang akan dimasukkan kedalam parameter.
// Contoh penempatan parameter dan argumen.
function saySomething(word) {
  // word itu sebagai parameter.
  console.log(word);
}
saySomething("Hello guyss, welcome back to with me yagesya"); // kalimat disamping itu sebagai argumen.
// Parameter dan argumen tidak hanya satu, tetapi bisa lebih dari satu.
// Buatlah parameter dan argumen sesuai kebutuhan kalian.
// Contoh penulisan parameter dan argumen yang lebih dari 1.
function say(name, age) {
  console.log(`Hello, My name is ${name} and im ${age} years old.`);
}
say("Ryan Handhika", 18);

// Function juga bisa mengembalikan sebuah data (value) hasil program yang berada didalam function tersebut.
// Contoh mengembalikan data (value) pada function.
function penjumlahan(a, b) {
  let hitung = a + b;
  return hitung; // Mengembalikan nilai hitung pada fungsi penjumlahan.
}
console.log(penjumlahan(5, 4));

// Variabel scope.
// Variabel yang berada didalam function itu berbeda dengan variabel yang berada diluar function.
// Scope dari variabel yang berada didalam function adalah local scope, sedangkan variabel yang berada diluar function itu adalah global scope.
// Maksudnya, jika suatu variabel berada di global scope, maka variabel tersebut dapat kita gunakan dimanapun, baik didalam function maupun diluar function.
// Sedangkan jika suatu variabel berada di local scope, seperti di dalam function, maka variabel tersebut hanya bisa digunakan didalam function saja.

// mendeklarasikan variabel global scope.
let country = "Japan";
function myCountry() {
  // mendeklarasikan variabel local scope.
  let country = "Indonesia";
  console.log(country);
  // Melakukan pemanggilan variabel global scope.
  // country = "Australia";
}
myCountry();
console.log(country);
// Note: ingat bahwa jika kalian menuliskan nama variabel dengan let atau tanpa let pada dua buah lingkup yang berbeda, itu memiliki makna yang berbeda juga.
// Jika kalian menuliskan namanya tanpa let, maka itu dianggap sebagai pemanggilan terhadap variabel global.
// sedangkan jika kalian menuliskan namanya dengan let, maka itu dianggap sebagai mendeklarasikan sebuah variabel baru yang memiliki sifat local scope.

// Ada beberapa hal yang perlu kalian ketahui pada saat mendeklarasikan sebuah variabel.
// Yang sudah kita ketahui bahwa ada 3 cara untuk mendeklarasikan variabel, seperti: var, let, dan const.
// Dari ketiga cara tersebut, tidak semua cara itu memerhatikan posisi peletakan dimana variabel dibuat (variable scope).
// seperti kata kunci var, yang tidak memerhatikan variable scope.
// Jadi jika kalian mendeklarasikan variabel menggunakan kata kunci var, maka baik variabel itu dibuat diluar function, maupun didalam function.
// Kita dapat mengaksesnya.

// Lexical scope
// Adalah kondisi dimana terdapat function didalam function, dan kita bisa mengakses variabel yang terdapat pada variabel diluar nya.
// Contoh dari lexical scope:
function bulan() {
  let namaBulan = "January";
  function hari() {
    let hari = "Minggu";
    console.log(namaBulan);
  }
  hari();
}
bulan();

// Function expression.
// Sebuah function yang disimpan kedalam variabel.
let makanApa = function (makanan) {
  console.log(`Hari ini lagi makan ${makanan}`);
};
makanApa("Bakpia");

// Function sebagai argumen dari function lain.
function duaKali(func) {
  func();
  func();
}

function lemparDadu() {
  let angkaDadu = Math.round(Math.random() * 6);
  console.log(angkaDadu);
}

duaKali(lemparDadu);

// Istilah method.
// Pada dasarnya method itu adalah function, tetapi function yang berada didalam sebuah object.
// Jadi, jika terdapat suatu function di dalam object, maka itu disebutnya sebagai method.
// Contoh method.
let mathTest = {
  penjumlahan: function (number) {
    let result = number + number;
    console.log(result);
  },
  perkalian: function (number) {
    let result = number * number;
    console.log(result);
  },
  pengurangan: function (number) {
    let result = number - number;
    console.log(result);
  },
  pembagian: function (number) {
    let result = number / number;
    console.log(result);
  },
};
console.log(mathTest.perkalian(9));

// Kata kunci this.
// Kata kunci ini digunakan untuk menargetkan data yang ingin diambil.
// this ini juga bisa membantu kita untuk menentukan data mana yang ingin kita ambil.
// Pada umumnya, this ini digunakan untuk mengambil nilai properti dari sebuah object.
// Contoh penggunaan this:
let biodata = {
  nama: "Ryan Handhika",
  hobi: "Mancing uang",
  kenalan: function (nama, hobi) {
    return `Hello nama saya ${this.nama}, hobi saya adalah ${this.hobi}`;
  },
};
console.log(biodata.kenalan());

// try and catch.
// try and catch digunakan untuk memeriksa apakah suatu program tersebut berjalan sesuai harapan kita atau tidak.
// Sebenarnya konsep dari try and catch ini hampir mirip dengan if dan else.
// Hanya saja yang menjadi salah satu perbedaan antara try and catch dengan if dan else adalah jika suatu program yang kita jalankan memiliki masalah.
// Maka, jika try and catch, dia akan menampilkan pesan tersebut tanpa memberhentikan program, jadi program yang dibawah nya akan tetap di eksekusi.
// sedangkan jika if dan else, dia akan menampilkan pesan kesalahannya serta memberhentikan program yang berada dibawah nya.
// Contoh dari if dan else:
// program dibawah ini akan error karena nilai dede belum di definisikan.
// Lalu, program yang dibawah nya tidak akan dijalankan sebelum masalah nya diperbaiki.
// if(dede < 0){
//   console.log('hello');
// } else {
//   console.log("baba")
// }
// console.log("heyoo"); // tidak akan dijalankan, karena if dan else nya bermasalah.
// Contoh dari try dan catch.
// program dibawah ini akan error karena nilai dede belum di definisikan.
// Tetapi, program yang berada dibawah nya tetap akan dijalankan.
try {
  food.meet();
} catch {
  console.log("Error!");
}
console.log("heyoo"); // tetap akan dijalankan, walaupun if dan else nya bermasalah.
