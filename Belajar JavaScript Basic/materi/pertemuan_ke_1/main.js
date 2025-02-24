// Pada saat kita membuat sebuah program, baik di bahasa pemrograman javascript maupun di bahasa pemrograman lain, kita pasti akan membuat yang namanya variabel. Untuk kalian yang masih belum paham tentang variabel, kalian bisa lihat dan pahami penjelasan dibawah ini.
// Apa itu Variabel?
// Variabel adalah suatu tempat yang digunakan untuk menyimpan sebuah data (value)
// Contoh Variabel:
var variabel1; // Variabel dengan nama variabel1 (dinamis)
let variabel2; // Variabel dengan nama variabel2 (dinamis)
const variabel3 = "Man"; // Variabel dengan nama hasil (statis)

// Maksud dari kata dinamis dan statis diatas adalah sebagai berikut:
// dinamis adalah sebuah variabel yang bisa diubah data (value) nya.
// Jika kita ingin membuat variabel dinamis, kita bisa menggunakan kata kunci var atau let.
// Contoh:
let age = 18;
age = 19;
console.log(age); // akan menampilkan angka 19, karena kita mengubah data (value) variabel age dari 18 ke 19.

// statis adalah sebuah variabel yang tidak bisa diubah data (value) nya jika sudah dideklarasikan.
// Jika kita ingin membuat variabel statis, kita bisa menggunakan kata kunci const.
// Contoh:
const name = "admin";
// name = "bayu"; // kode disamping akan saya komentari supaya program dapat berjalan dengan baik, karena jika saya tidak komentari, maka program akan menampilkan error
console.log(name); // akan menampilkan error, karena kita mencoba mengubah data (value) dari variabel name

// Setelah mengetahui apa itu variabel, kita juga harus mengetahui terlebih dahulu apa itu tipe data. Dibawah ini sudah saya jelaskan tentang penjelasan serta contoh dari tipe data. Silahkan baca dan pahami materi dibawah ini.
// Apa itu Tipe Data?
// Tipe Data adalah suatu tipe yang dimiliki oleh sebuah data (value)
// Contoh Tipe Data:
// Number = Tipe Data yang data (value) nya berisikan angka-angka, seperti ..., -1, 0, 1, 1.5, ...
let umur = 18; // Contoh dari variabel bertipe data number
console.log(typeof umur);
// String = Tipe Data yang  data (value) nya berisikan text, seperti "Ryan Handhika", "Selamat Pagi", "Kamu Jomblo Yaa?", ...
let nama = "Ryan Handhika"; // Contoh dari variabel bertipe data string
console.log(typeof nama);
// Boolean = Tipe Data yang data (value) nya berisikan sebuah ketentuan, seperti true (benar) dan false (salah)
let statusPernikahan = true; // Contoh dari variabel bertipe data boolean
console.log(typeof statusPernikahan);
// Undefined = Tipe Data yang berada pada sebuah variabel yang belum memiliki data (value)
let alamat; // Contoh dari variabel bertipe data undefined
console.log(typeof alamat);
// NaN (Not a Number) = Tipe data yang diperuntukan  pada hasil dari sebuah operasi aritmatika yang salah
const pembagian = 0 / 0; // Contoh dari variabel bertipe data Nan
console.log(typeof pembagian);
// Null = Tipe Data yang diberikan untuk variabel yang memang ingin dikosongkan terlebih dahulu data (value) nya
let menuMakan = null; // Bertipe Data Null
console.log(typeof menuMakan);
