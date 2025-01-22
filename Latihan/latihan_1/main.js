function numberGuessing() {
  let jawaban = Math.round(Math.random() * 100);
  console.log(jawaban);
  let angkaTebakan = parseInt(prompt("Masukkan angka tebakan anda: "));
  while (angkaTebakan !== jawaban) {
    if (angkaTebakan > jawaban) {
      alert("Angka tebakan anda terlalu tinggi");
      angkaTebakan = parseInt(prompt("Masukkan angka tebakan anda: "));
    } else {
      alert("Angka tebakan anda terlalu rendah");
      angkaTebakan = parseInt(prompt("Masukkan angka tebakan anda: "));
    }
  }
  alert(`Jawaban anda benar, angka tebakannya adalah ${jawaban}`);
}
