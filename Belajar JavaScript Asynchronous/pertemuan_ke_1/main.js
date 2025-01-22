// Call Stack adalah mekanisme untuk interpreter (seperti interpreter javascript di browser web) untuk melacak lokasi skrip yang memanggil banyak fungsi-fungsi yang sedang dijalankan dan fungsi apa yang dipanggil dari dalam fungsi itu, dll.
// Contoh:
// Menghitung nilai pythagoras
const perkalian = (a, b) => a * b;
const akar = (x) => perkalian(x, x);
const pythagoras = (a, b, c) => akar(a) + akar(b) === akar(c);

console.log(pythagoras(3, 4, 5)); // true
// kode diatas akan menampilkan true, yang artinya program akar(a) + akar(b) === akar(c) itu valid.

// Apakah javascript adalah bahasa single thread???
// yups, benar sekali. Munking ada beberapa orang yang berkata bahwa javascript ini bisa mengerjakan suatu proses secara bersamaan (non-blocking), tetapi sebenarnya itu bukan javascript yang sesungguhnya. Karena javascript yang sebenarnya itu melakukan suatu proses dengan single thread.
// Single thread adalah sebuah program yang hanya dapat menjalankan satu proses dalam satu waktu.
// Jika kalian belum paham dari penjelasan diatas, kita bisa analogikan single thread ini sebagai aktivitas sehari hari yang kita lakukan, yang dimana kita tidak bisa langsung melakukan semua aktivitas tersebut secara bersamaan.
// Kita ambil contoh, misalkan kita sedang mandi. Apakah kita bisa mandi sekaligus makan? tentu saja bisa, tapi ya ga logis aja, masa iya kita makan pada saat kita mandi. Pasti kita akan makan setelah kita mandi, nah itu adalah salah satu contoh dari single thread.

// Nah, diatas merupakan penjelasan dari single thread. Sekarang kita akan mempelajari apa itu non-blocking.

// Non-blocking adalah sebuah program yang dapat menjalankan suatu proses dalam waktu yang bersamaan (bisa sekaligus banyak dalam sekali proses).
// Jika kalian belum paham dari penjelasan diatas, kita bisa analogikan non-blocking ini seperti aktivitas sehari hari yang kita miliki. Katakanlah aktivitas nya itu sama seperti yang ada pada penjelasan single thread diatas.
// Kita ambil contoh, misalkan kita sedang mandi. Ya memang jika kita sedang mandi, kita tidak bisa makan, tetapi kita bisa melakukan suatu kegiatan terlebih dahulu sebelum mandi. Katakanlah kita belum memasak nasi. yang sudah kita ketahui, bahwa memasak nasi itu membutuhkan waktu sampai nasi siap di santap. Nah, terdapat waktu kosong yang bisa kita gunakan untuk melakukan aktivitas lain. seperti mandi atau kegiatan kegiatan lain. Jadi kita bisa melakukan aktivitas sambil menunggu nasi matang.

// Contoh single thread dan multi thread (non-blocking)
// Contoh single thread
console.log("Akan muncul kesatu");
console.log("Akan muncul kedua");
console.log("Akan muncul ketiga");
// Contoh multi thread (non-blocking)
console.log("Akan muncul kesatu");
setTimeout(() => {
  console.log(
    "Ini udah masuk kedalam memori, tetapi akan dijalankan setelah 3 detik kedepan"
  );
}, 3000);
console.log("Akan muncul kedua");
