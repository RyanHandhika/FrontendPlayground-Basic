// tugas ke-1
// array berisi 5 object
const dataSiswa = [
  {
    nama: "johndoe",
    umur: 20,
    nilai: 80,
  },
  {
    nama: "pragos",
    umur: 25,
    nilai: 75,
  },
  {
    nama: "genta",
    umur: 30,
    nilai: 90,
  },
  {
    nama: "meimei",
    umur: 19,
    nilai: 78,
  },
  {
    nama: "agoy",
    umur: 18,
    nilai: 80,
  },
];
console.log(dataSiswa);
// tugas ke-2
// menghitung nilai rata rata
function rataRataNilai() {
  const nilaiRataRata = dataSiswa.reduce(
    (total, nilai) => total + nilai.nilai / 5,
    0
  );
  return nilaiRataRata;
}
console.log(rataRataNilai());
// tugas ke-3
// Tambahkan siswa baru ke dalam array menggunakan spread operator
const tambahSiswa = [...dataSiswa, { nama: "ryan", umur: 18, nilai: 95 }];
console.log(tambahSiswa);
// tugas ke-4
// cari siswa dengan nilai tertinggi
function nilaiTertingga() {
  const siswaNilaiTertinggi = tambahSiswa.reduce((tertinggi, siswa) => {
    return siswa.nilai > tertinggi.nilai ? siswa : tertinggi;
  });
  return siswaNilaiTertinggi;
}
console.log(nilaiTertingga());
