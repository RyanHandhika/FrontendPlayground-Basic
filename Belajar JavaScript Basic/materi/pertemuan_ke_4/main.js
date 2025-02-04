// Struktur data pada javascript
// Struktur data adalah Cara menyusun, menyimpan, dan mengorganisir data di dalam komputer agar dapat diakses, diolah, dan dimanipulasi dengan efisien.
// Contoh dari struktur data pada bahasa pemrograman javascript itu seperti:
// array
// array adalah deretan dari sekumpulan nilai, contoh seperti:
// deretan komentar di video tiktok, kumpulan tingkat kesulitan game, daftar putar lagu, dan lain sebagai nya.
// didalam array, kita bisa memasukkan data (value) yang tipe data nya itu berbeda beda, contohnya:
// string, number, boolean, ...
let arr = ["Manggo", "Banana", true, false, 1, 2];
console.log(arr);
// push() = digunakan untuk menambahkan data (value) kedalam array, dengan urutan data (value) paling terakhir.
arr.push("Avocado");
console.log(arr);
// pop() = digunakan untuk menghapus data (value) terakhir pada array.
arr.pop();
console.log(arr);
// unshift() = digunakan untuk menambahkan data (value) kedalam array, dengan urutan data (value) paling awal.
arr.unshift("Orange");
console.log(arr);
// shift() = digunakan untuk menghapus data (value) awal pada array.
arr.shift();
console.log(arr);

// Method in Array
// didalam struktur data array, terdapat banyak sekali method yang bisa kita gunakan untuk memanipulasi data di dalam array.
// dibawah ini merupakan beberapa method pada array yang mungkin akan sering kalian gunakan untuk memanupulasi data, seperti:
// concat, includes, indexOf, join, reverse, slice, splice, sort.
let buahBerwarnaMerah = ["Apple", "Strawberry", "Delima"];
let buahBerwarnaKuning = ["Banana", "Orange"];
// concat = digunakan untuk menggabungkan array.
let buahBuahan = buahBerwarnaMerah.concat(buahBerwarnaKuning);
console.log(buahBuahan);
// includes = digunakan untuk mencari suatu nilai didalam array.
let cariBuah = buahBerwarnaMerah.includes("Strawberry");
console.log(cariBuah);
// indexOf = digunakan untuk mengetahui nomor index dari data (value) dalam array.
let cariNomorIndex = buahBuahan.indexOf("Orange");
console.log(cariNomorIndex);
// join = digunakan untuk menggabungkan semua data (value) dalam array menjadi satu data (value).
let gabunganSemuaData = buahBuahan.join(", ");
console.log(gabunganSemuaData);
// reverse = membalikan posisi urutan data (value) dalam array.
let balikanPosisi = buahBuahan.reverse();
console.log(balikanPosisi);
// slice = digunakan untuk memberikan titik awal dan akhir pada data (value) yang ingin ditampilkan.
let titikPotong = buahBuahan.slice(1, 3);
console.log(titikPotong);
// splice = digunakan untuk menambahkan, menghapus atau bahkan keduanya pada data (value) dalam array.
let contohSplice = buahBuahan.splice(1, 0, "Melon");
console.log(buahBuahan);
// sort = digunakan untuk mengurutkan data (value) dalam array.
let dataTerurut = buahBuahan.sort();
console.log(dataTerurut);

// Nested Array
const dataPribadi = [
  "Bayu",
  18,
  [
    ["Tumis Bayam", "Semur Bayam"],
    ["Ikan Bakar", "Ikan Goreng"],
  ],
  ["Main Bola", "Maik Takbenteng"],
  ["salsa", "izal", "azal", "kela", "opal", "agoy"],
];
console.log(dataPribadi);
