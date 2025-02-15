// Mendeklarasikan variabel angkaMaksimal serta memberikan data (value) berupa angka maksimal penebakan.
let angkaMaksimal = parseInt(prompt("Masukkan angka maksimal: "));
// Validasi (pemeriksaan) jika variabel angkaMaksimal masih kosong (tidak di isi) maka akan terus menampilkan popun memasukkan angka maksimal.
while (!angkaMaksimal) {
  // Input masukkan jika sebelumnya user tidak memasukkan angka maksimal.
  angkaMaksimal = parseInt(prompt("Masukkan angka maksimal: "));
}
// Mendeklarasikan variabel jawaban.
const jawaban = Math.round(Math.random() * angkaMaksimal);
// Contekan jawaban hehe.
console.log(jawaban);
// Mendeklarasikan variabel angka tebakan yang dimasukkan.
let angkaTebakan = parseInt(prompt("Masukkan angka tebakan: "));
// Mendeklarasikan variabel percobaan dalam menebak angka
let percobaan = 1;
// Validasi (pemeriksaan) jika angka tebakan yang dimasukkan tidak benar (berbeda dengan jawaban).
while (angkaTebakan != jawaban) {
  // Validasi (pemeriksaan) jika angka tebakan lebih dari jawaban.
  if (angkaTebakan > jawaban) {
    // Memasukkan ulang data (value) untuk variabel angka tebakan.
    angkaTebakan = parseInt(prompt("Angka tebakan terlalu tinggi: "));
    // Validasi (pemeriksaan) jika angka tebakan kurang dari jawaban.
  } else {
    // Memasukkan ulang data (value) untuk variabel angka tebakan.
    angkaTebakan = parseInt(prompt("Angka tebakan terlalu rendah: "));
  }
  // Penambahan data (nilai) dari variabel percobaan jika pemain belum menebak angka dengan benar.
  percobaan++;
}
// Menampilkan pesan selamat dan banyak percobaan yang dilakukan, serta tanda dari berakhirnya permainan.
alert(`Selamat Tebakan Anda Benar dengan mencoba sebanyak ${percobaan} kali.`);
