// Perulangan (Looping).
// for loop.
for (i = 1; i <= 10; i++) {
  console.log(i);
}
// while loop.
let a = 1;
while (a <= 10) {
  console.log(a);
  a++;
}
// Note: jangan lupa memberikan increment atau decrement agar tidak terjadi nested looop (Perulangan yang tak henti henti).

// Mengambil data array menggunakan perulangan.
let animals = ["cat", "dog", "cow", "goat", "fish", "duck"];
for (i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Nested Loop.
let pilihan = "abcd";
for (i = 1; i <= 10; i++) {
  console.log(`Soal Nomer ${i}:`);
  for (j = 0; j < pilihan.length; j++) {
    console.log(`     ${pilihan[j]} Pilihan jawaban`);
  }
}

// Mengambil data dari nested array menggunakan nested for.
let siswa = [
  ["bayu", "silvi", "agus"],
  ["caca", "bagas", "kai"],
  ["nia", "ani", "coki"],
];
for (i = 0; i < siswa.length; i++) {
  let row = siswa[i];
  console.log(`Kelas: ${i + 1}`);
  for (j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

// Kata Kunci Break pada perulangan (Looping).
// breake dalam perulangan for.
for (i = 1; i <= 100; i++) {
  console.log(`This ${i}`);
  if (i === 10) break;
}
// break dalam perulangan while.
let input = prompt("Say something? ");
while (true) {
  input = prompt("Say again? ");
  if (input === "stop") break;
}

// Perulangan for...of.
// Perulangan ini terbilang baru, dan tidak bisa bekerja pada browser internet explorer.
// Cara penulisan nya bisa dibilang lebih elegan, dan lebih mudah dibaca oleh para pemula.
// Contoh perulangan for...of ini, seperti:
let jenisMobil = [
  "Tesla",
  "Expander",
  "Alphard",
  "Sienta",
  "Kijang Inova",
  "Fortuner",
];
for (mobil of jenisMobil) {
  console.log(`Mobil ${mobil}`);
}

// Mengambil data dari nested array menggunakan for...of.
let semua_mahasiswa = [
  ["ryan", "hadyan", "jaja", "ikhsan", "raka"],
  ["faryq", "dadan", "eza", "kakang", "eza"],
  ["chika", "amel", "vivi", "indah", "janira"],
];
for (mahasiswa of semua_mahasiswa) {
  for (namaMahasiswa of mahasiswa) {
    console.log(namaMahasiswa);
  }
}

// Mengambil data dari nested array menggunakan for...of.
let studentScores = {
  Rafi: 90,
  Tofiq: 88,
  Edo: 85,
  Dwi: 83,
  Nico: 82,
  Ryan: 80,
};
for (students in studentScores) {
  console.log(`${students} memiliki score ${studentScores[students]}`);
}
// Mengubah struktur data object menjadi array terlebih dahulu.
let scores = Object.values(studentScores);
let total = 0;
for (score of scores) {
  total += score;
}
let average = total / scores.length;
console.log(Math.floor(average));
