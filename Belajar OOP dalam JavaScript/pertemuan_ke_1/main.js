// Perkenalan Tentang Prototype di Javasript
// Object prototype merupakan mekanisme suatu javascript yang bisa menurunkan suatu fitur yang dimiliki oleh satu object ke object yang lain.
// Pada object prototype ini, kita bisa mengubah bahkan menambahkan method baru.
// Contoh:
// Membuat method baru yang bernama hello dan berfungsi untuk menampilkan kata "Hello World".
Array.prototype.hello = () => {
  console.log("Hello World");
};
// Untuk kalian yang belum mengerti apa itu method, coba baca keterangan dibawah ini.
// Method adalah sebuah fungsi yang berada didalam object.
// Pada javascript, ada banyak sekali method yang bisa kita gunakan langsung untuk mempermudah kita menyelesaikan suatu permasalahan.
// Contoh method yang ada pada struktur data array: slice(), map(), dan lain sebagainya.
