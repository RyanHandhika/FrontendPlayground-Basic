function konversiMataUang() {
  let pilihanMenuKonversi = parseInt(
    prompt(
      "Pilihan Menu:\n1. Konversi IDR ke USD\n2. Konversi USD ke IDR\nMasukkan nomer menu (1 atau 2)"
    )
  );
  while (pilihanMenuKonversi !== 1 && pilihanMenuKonversi !== 2) {
    alert("Nomor menu yang anda masukkan tidak valid, ulangi!");
    pilihanMenuKonversi = parseInt(
      prompt(
        "Pilihan Menu:\n1. Konversi IDR ke USD\n2. Konversi USD ke IDR\nMasukkan nomer menu (1 atau 2)"
      )
    );
  }
  let masukkanJumlahUang = parseInt(prompt("Masukkan nominal uang:"));
  let uang = 0;
  if (pilihanMenuKonversi === 1) {
    uang = masukkanJumlahUang / 16000;
    alert(`Rp. ${masukkanJumlahUang} dikonversikan ke USD = ${uang}$`);
  }
  if (pilihanMenuKonversi === 2) {
    uang = masukkanJumlahUang * 16000;
    alert(`$${masukkanJumlahUang} dikonversikan ke IDR = Rp. ${uang}`);
  }
}
