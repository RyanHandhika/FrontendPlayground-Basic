// Struktur data object pada bahasa pemrograman javascript.
// Struktur data object adalah sekumpulan properties.
// Properties merupakan sebuah key dan value.
// Cara mengakses data (value) dalam struktur data object adalah dengan menggunakan custom key.
// Contoh penulisan struktur data object.
const barang = {
  kategori: "Sepatu",
  kisaranHarga: [150000, 500000],
  buatan: ["USA", "INDONESIA"],
  ukuran: {
    dewasa: [40, 50, 60],
    remaja: [35, 40, 45],
    anakAnak: [25, 30],
  },
};
// Memanipulasi struktur data object.
barang.bahan = ["Kulit Sapi", "Kain Katun"];
barang.warna = {
  perempuan: ["Pink", "Putih", "Merah Maron"],
  lelaki: ["Hitam", "Biru", "Hijau"],
};
console.log(barang);
// Cara mengambil data (value) dari gabungan struktur data array dan object.
console.log(barang["ukuran"]["remaja"][1]);
