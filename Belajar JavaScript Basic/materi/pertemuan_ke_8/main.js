// Foreach method
// Foreach ini adalah sebuah callback function yang dapat memanggil sebuah fungsi sebanyak jumlah element yang dimiliki array.
// Contoh penulisan array:
// Contoh 1
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
angka.forEach(function (e) {
  if (e % 2 === 0) {
    console.log(e);
  }
});
// Contoh 2
const anime = [
  {
    title: "Naruto",
    rating: 90,
  },
  {
    title: "Attack on Titan",
    rating: 85,
  },
  {
    title: "One Piece",
    rating: 95,
  },
  {
    title: "Bleach",
    rating: 80,
  },
  {
    title: "Hunter x Hunter",
    rating: 80,
  },
  {
    title: "Conan",
    rating: 90,
  },
];
anime.forEach(function (movie) {
  console.log(`Title : ${movie["title"]} \nRating: ${movie["rating"]}`);
});

// Map
// Map adalah sebuah callback function yang nilai baliknya adalah array baru yang sudah dimodifikasi melalui callback function dari suatu array.
// Contoh penulisan map:
// Contoh 1:
const numbers = [1, 2, 3, 4, 5, 6, 7];
const doubleNumber = numbers.map(function (number) {
  return number * 2;
});
console.log(doubleNumber);
// Contoh 2:
const names = ["ryan", "rafi", "nico", "serena", "aido", "toufiq", "dwi"];
const capitalNames = names.map(function (name) {
  return name.toLocaleUpperCase();
});
console.log(capitalNames);

// Arrow function
// Cara lain penulisan dari sebuah function
// Contoh 1 (tanpa parameter):
const penjumlahan = () => {
  return Math.round(Math.random() * 10);
};
console.log(penjumlahan());
// Contoh 2 (menggunakan 1 parameter):
const perpangkatan = (x) => {
  return x ** 2;
};
console.log(perpangkatan(10));
// Contoh 3 (menggunakan lebih dari 1 parameter):
const pengurangan = (x, y, z) => {
  return x - y - z;
};
console.log(pengurangan(6, 3, 2));

// Implisit return dari arrow function
// Penyederhanaan arrow function, dan ini akan berfungsi jika sebuah fungsi hanya menjalankan tidak lebih dari 1 program
// Contoh 1:
const random = () => Math.round(Math.random() * 10);
console.log(random());
// Contoh 2:
const perkalian = (a, b) => a * b;
console.log(perkalian(2, 3));

// SetTimeout dan SetInterval
// SetTimeout dan SetInterval adalah callback function yang bukan berasal dari array.
// Fungsi nya adalah untuk memberikan waktu jeda dan melakukan perulangan sesuai waktu yang sudah ditentukan.
// Perbedaan dari keduanya adalah sebagai berikut:
// SetTimeout = akan menjankan sebuah proses pada jeda waktu yang sudah ditentukan (hanya melakukan proses sebanyak 1 kali).
// SetInterval = akan selalu menjankan sebuah proses pada jeda waktu yang sudah ditentukan (melakukan proses secara berulang sesuai dengan jeda waktu yang sudah ditentukan).
// Contoh setTimeout:
console.log("Nanti jangan lupa ingetin gw minum obat yaaa?");
setTimeout(() => {
  console.log("Iyaaa brooo");
}, 3000); // hanya menampilkan 1x hasil dari proses pada detik ke 3 setelah program dijalankan.
// Contoh setInterval:
const interval = setInterval(() => {
  console.log("Udah minum obat blom?");
}, 6000); // selalu mengeksekusi perintah setiap 6 detik sekali.
// Cara untuk memberhentikan interval yaitu dengan menuliskan:
clearInterval(interval);

// Filter
// Filter adalah callback function yang akan mengembalikan nilai array lagi yang sudah dimanipulasi sesuai dengan kriteria yang ditetapkan.
// Contoh penulisan filter:
// Contoh 1:
const multiPersonData = [
  {
    name: "Michel",
    gender: "Female",
    age: 25,
    married: false,
  },
  {
    name: "John",
    gender: "Male",
    age: 28,
    married: false,
  },
  {
    name: "Angle",
    gender: "Female",
    age: 28,
    married: true,
  },
  {
    name: "Boy",
    gender: "Male",
    age: 35,
    married: false,
  },
  {
    name: "kitty",
    gender: "Female",
    age: 30,
    married: true,
  },
];
const personData = multiPersonData.filter((person) => person.married == true);
console.log(personData);
// Contoh 2:
const sepatu = [
  {
    merk: "Nike",
    harga: 2000000,
  },
  {
    merk: "Converse",
    harga: 500000,
  },
  {
    merk: "Adidas",
    harga: 600000,
  },
  {
    merk: "Vans",
    harga: 800000,
  },
  {
    merk: "Piero",
    harga: 350000,
  },
];
const sepatuMurah = sepatu.filter((sm) => sm.harga <= 1000000);
console.log(sepatuMurah);
const namaSepatuMurah = sepatuMurah.map((nama) => nama.merk);
console.log(namaSepatuMurah);

// every dan some
// every adalah callback function yang akan mengembalikan nilai boolean.
// true pada saat seluruh nilai yang ada pada suatu array memiliki kriteria yang sama.
// false jika sebaliknya.
const examScores = [90, 90, 85, 88, 70, 88];
// Contoh every:
console.log(examScores.every((score) => score >= 80)); // false
// some adalah callback function yang mirip dengan every, tetapi lebih fleksibel.
// true pada saat salah satu nilai yang ada pada suatu array memiliki kriteria yang sama.
// false jika sama sekali tidak ada yang sesuai kriteria.
// Contoh some:
console.log(examScores.some((score) => score >= 90)); // true

// Reduce.
// Reduce adalah callback function yang mengembalikan nilai single value.
// Cara kerja dari reduce ini hampir sama seperti foreach pada array.
// Yang dimana, program akan dijalankan sebanyak jumlah data (value) dalam array, hanya saja jika foreach mengembalikan seluruh nilai dalam array.
// Sedangkan recude ini hanya mengembalikan satu nilai.
// Contoh reduce:
// Contoh 1:
const nilaiUlangan = [90, 90, 85, 88, 70, 88];
console.log(nilaiUlangan.reduce((nilai1, nilai2) => nilai1 + nilai2)); // nilai ulangan akan terus ditambahkan sampai elemen yang terakhir.
// Contoh 2:
const film = [
  {
    title: "John Wick",
    rating: 85,
  },
  {
    title: "Moana",
    rating: 85,
  },
  {
    title: "Wild Robot",
    rating: 95,
  },
  {
    title: "Transformer",
    rating: 90,
  },
  {
    title: "Spongebobs",
    rating: 85,
  },
  {
    title: "Conan",
    rating: 80,
  },
];
const ratingTertinggi = film.reduce((film1, film2) => {
  console.log(film1, film2);
  if (film1.rating > film2.rating) {
    return film1;
  }
  return film2;
});
console.log(ratingTertinggi);

// Note: pada saat kita membuat sebuah function, dimana function tersebut adalah arrow function.
// Maka kita tidak bisa menggunakan keyword this untuk mengambil nilai property.
// karena, jika kira menggunakan keyword this pada arrow function, maka yang terjadi adalah keyword this akan mencari di windows nya.
// dan itu tidak akan pernah ketemu.
// Jadi, jika kalian ingin menggunakan keyword this, usahakan jangan menggunakan arrow function.
