// Bagusss, kalian sudah mengetahui apa itu variabel dan tipe data. Jika kalian masih belum paham tentang variabel dan tipe data, coba kalian lihat dan pahami ulang materi diatas secara perlahan agar kalian bisa mengerti dan paham.
// Sekarang kita akan belajar tentang beberapa fungsi bawaan (built in function) pada bahasa pemrograman jacascript.
// lenght = fungsi yang digunakan untuk menghitung panjang dari sebuah data (value).
let negara = "indonesia"; // i, n, d, o, n, e, s, i, a = 9 huruf
const panjangData = negara.length; // Output : 9
console.log(panjangData);
// toUpperCase() dan toLowerCase() = fungsi yang digunakan untuk mengubah semua teks menjadi huruf kapital atau huruf kecil
const kapital = negara.toUpperCase();
console.log(kapital);
const kecil = negara.toLowerCase();
console.log(kecil);
// toString() = fungsi yang digunakan untuk mengkonversi data (value) pada variabel menjadi sebuah string
const tahun = 2025; // Awal nya bertipe data Number
console.log(typeof tahun);
const konversiTahun = tahun.toString(); // Ubah tipe data menjadi String = "2025"
console.log(konversiTahun);
console.log(typeof konversiTahun);

// Bagaimana, apakah kalian sudah paham mengenai fungsi bawaan (built in function) pada bahasa pemrograman javascript?
// Sebenarnya masih sangat fungsi-fungsi bawaan (built in function) yang disediakan oleh bahasa pemrograman javascript.
// Bahkan ada juga beberapa fungsi yang memelurkan sebuah argument.
// Untuk kalian yang belum mengetahui apa itu argumen, intinya argumen adalah sebuah nilai yang diperlukan oleh si fungsi untuk mengerjakan sesuatu
// Banyak nya argumen tergantung pada fungsi apa yang ingin dilakukan
// Dibawah ini adalah beberapa contoh fungsi bawaan (built in function) yang membutuhkan argumen, seperti:
// replace() = fungsi yang digunakan untuk mengubah sebuah data (value) pada variabel
const gantiNegara = negara.replace("indonesia", "Japan"); // argumen 1 = 'indonesia' (data yang ingin di ubah), argumen 2 = 'Japan' (data perubahan nya)
console.log(gantiNegara);
// indexOf() = fungsi yang digunakan untuk mencari urutan suatu data (value) pada variabel berdasarkan nomor index (index diawali dari 0).
const hobi = "Membaca";
let urutanData = hobi.indexOf("b"); // argumen merujuk pada data apa yang ingin ditemukan urutan nya.
console.log(urutanData);
// slice() = fungsi ini digunakan untuk memotong data (value) yang ingin ditampilkan.
const quote = "Hiduplah Seperti Larry";
let tampilQuote = quote.slice(0, 8); // argumen 1 = 0 (titik potong pertama), argumen 2 = 8 (titik potong kedua). yang artinya data akan dipotong dari urutan ke 0 dampai ke 8 (index selalu dimulai dari 0);
console.log(tampilQuote);
// Kalian bisa lihat beberapa fungsi lainnya di link berikut: https://www.w3schools.com/jsreF/jsref_obj_string.asp

// Pada javascript juga terdapat template literal yang bisa kita gunakan untuk mempermudah pada saat ingin menggabungkan beberapa variabel.
// Berikut adalah perbedaan jika kita tidak menggunakan dan jika kita menggunakan template literal dalam penggabungan beberapa variabel
let namaSaya = "Ryan Handhika";
let umurSaya = 18;
let hobiSaya = "Buat Program";
let makananFavorit = "Telur dadar made in my mom";
// tampa template literal
const tanpaTemplateLiteral =
  "Hallo Semuanya, Nama Saya " +
  namaSaya +
  ", Umur Saya " +
  umurSaya +
  " Tahun, Hobi saya tidak lain dan tidak bukan adalah " +
  hobiSaya +
  ", Makanan kesukaan saya adalah " +
  makananFavorit +
  ".";
// menggunakan template literal
const templateLiteral = `Hallo Semuanya, Nama Saya ${namaSaya}, Umur Saya ${umurSaya} Tahun, Hobi saya tidak lain dan tidak bukan adalah ${hobiSaya}, Makanan kesukaan saya adalah ${makananFavorit}.`;
console.log(tanpaTemplateLiteral);
console.log(templateLiteral);

// Mengenal object Math dan angka acak
// math adalah sebuah objek yang terdapat pada bahasa pemrograman javascript
// objek math ini memiliki banyak fungsi dan properti yang berguna untuk operasi matematika. seperti nilai konstan, pembulatan, dan matematika lainnya
// Contoh dari objek math:
// Nilai phi pada matematika
Math.PI; // 3.14XXXXX
// Pembulatan keatas
Math.round(4.7); // 5
// Pembulatan kebawah
Math.floor(3.888); // 3
// Nilai absolut
Math.abs(-123); // 123
// Nilai perpangkatan
Math.pow(2, 5); // 32

// Masih banyak lagi, kalian bisa klik link dibawah ini untuk mengetahui berbagai macam fungsi dan properti yang dapat digunakan:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
