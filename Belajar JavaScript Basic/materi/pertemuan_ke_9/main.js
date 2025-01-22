// Default value parameter
// sebuah nilai yang digunakan pada saat function dipanggil tetapi tidak diberi nilai argumen yang diperlukan.
// Contoh default value parameter:
function saySomthing(name = "ryan", sectence = "Are you oke?") {
  console.log(`Morning ${name}, ${sectence}`);
}
saySomthing(); // akan mengambil nilai default yang sudah ditentukan.
saySomthing("izal", "What did you say?"); // akan menimpa nilai default, sehingga data yang ditampilkan adalah data masukkan.

// Spread operator pada function
// spread operator ini dapat mengubah suatu array atau object atau bahkan string menjadi deret parameter untuk function.
// Contoh spread operator:
const angka = [1, 2, 3, 4, 5];
console.log(Math.max(angka)); // NaN
// Karena variabel angka berupa array, jadi kita tidak bisa langsung mencari nilai terbesar dari array.
// Maka dari itu, kita harus menggunakan spread operator terlebih dahulu untuk mengubah array nya menjadi deret parameter.
console.log(...angka); // 1 2 3 4 5
console.log(Math.max(...angka)); // 5
console.log(Math.min(...angka)); // 1
// Kita bisa menggunakan titik sebanyak 3x sebelum penulisan variabel nya.

// Merge array dengan spread operator
// Menggabungkan array satu dengan array lain nya, menggunakan spread operator.
// Contoh merge array dengan spread operator:
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const name = ["ryan", "doni", "angel", "nata", "ega"];
const campuran = [...number, ...name];
console.log(campuran);
// selain menggabungkan array, spread operator ini juga bisa menggabungkan object.
const user = {
  name: "admin",
  email: "admin@gmail.com",
};
const dataUser = {
  country: "Indonesia",
  password: "admin123",
};
console.log({ ...user, ...dataUser });
// Spread operator ini juga bisa digunakan untuk menambahkan sebuah data kedalam array atau object.
// Contoh 1:
const animals = ["chiken", "fish", "bird", "goat", "cow"];
console.log(...animals, "bear");
// Contoh 2:
const properties = {
  shoes: ["Nike", "Adidas"],
  watches: "Rolex",
  car: "Tesla",
};
console.log({ ...properties, bag: "Gucci" });
// Rest Param menggunakan spread operator
// Rest Param adalah alternatif kita dalam membuat sebuah parameter yang mungkin sampai tidak terhingga banyaknya (sampai ke n).
// Contoh 1:
const sumAll = (...numbers) => {
  return numbers.reduce((total, el) => total + el);
};
console.log(sumAll(5, 4, 3, 2, 1));
// Contoh 2:
const nama = ["ryan", "bayu", "hadi", "gilang", "lili", "ica", "ayu"];
const pemenang = (gold, silver, bronze, ...pesertaLain) => {
  console.log(`Medali gold diraih oleh: ${gold}`);
  console.log(`Medali silver diraih oleh: ${silver}`);
  console.log(`Medali bronze diraih oleh: ${bronze}`);
  console.log(`Peserta lainnya: ${pesertaLain}`);
};
pemenang(...nama);
// Destructing menggunakan spread operator.
// Destructing adalah sebuah proses mengunboxing array atau object.
// Contoh destructing pada array:
const superhero = [
  "Batman",
  "Ironman",
  "Hulk",
  "Thor",
  "Captain America",
  "Deadpool",
];
const [sukabet, suka, okelah, ...biasaaja] = superhero;
// Contoh destructing pada onject:
const foods = {
  meet: "meetball",
  vegetable: "tomato",
  soup: "sup bening",
};
const { meet: verygood, vegetable: good, soup: goodtoo } = foods;
console.log({ verygood });
// Contoh lain destructing:
// Destructing juga bisa kita gunakan sebagai parameter didalam function.
// Contoh:
const account = {
  username: "Ryan Handhika",
  email: "ryan@gmail.com",
  password: "pwd123",
};
const dashboard = ({ username, email }) => {
  data = `Username: ${username} \nEmail: ${email}`;
  return data;
};
console.log(dashboard(account));
// Destructing juga bisa kita gunakan didalam callback function.
// Contoh:
const animes = [
  {
    title: "Naruto",
    year: 2002,
    rating: 85,
  },
  {
    title: "Conan",
    year: 2010,
    rating: 80,
  },
  {
    title: "Nemo",
    year: 2018,
    rating: 90,
  },
  {
    title: "Titanic",
    year: 2015,
    rating: 90,
  },
  {
    title: "One Piece",
    year: 2017,
    rating: 95,
  },
];

const anime = animes.map(({ title, year, rating }) => {
  console.log(`Judul: ${title} \nTahun: ${year} \nRating: ${rating}`);
});
