const listPengeluaran = [];
function dataPengeluaran(
  tanggal,
  sisaUang,
  pengeluaran,
  pemasukkan,
  keterangan
) {
  const data = { tanggal, sisaUang, pemasukkan, pengeluaran, keterangan };
  listPengeluaran.push(data);
}
function totalPengeluaran() {
  return listPengeluaran.reduce((total, item) => total + item.pengeluaran, 0);
}
function cariDataPengeluaran(nominalPengeluaran) {
  const dataYangDicari = listPengeluaran.find(
    (item) => item.pengeluaran === nominalPengeluaran
  );
  return dataYangDicari;
}
dataPengeluaran("2025-01-01", 100000, 50000, 150000, "Belanja Bulanan");
dataPengeluaran("2025-01-02", 50000, 25000, 0, "Makan");
dataPengeluaran("2025-01-03", 25000, 10000, 0, "Transportasi");
console.log(listPengeluaran);
console.log(totalPengeluaran());
console.log(cariDataPengeluaran(25000));
