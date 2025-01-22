// Pada javascript, kita juga bisa membuat sebuah logic yang bisa kita gunakan untuk menyelesaikan suatu tugas yang kita miliki
// Dalam javascript, terdapat beberapa operator perbandingan yang bisa kalian gunakan, seperti:
// ==, ===, !=, !==, <, <=, >, >=
// dalam javascript juga terdapat beberapa operator logic yang bisa kita gunakan, seperti:
// &&, ||, !
// Login ini juga bisa kita gunakan untuk memvalidasi suatu ketentuan, seperti:
// Statement if (login)
let username = prompt("Masukan Username: ");
let password = prompt("Masukan Password: ");
if (username === "admin" && password === "123") {
  alert(
    `Selamat datang ${username}, Informasi Pribadi Anda : (username = ${username}) dan (password = ${password})`
  );
} else {
  alert("username atau password salah");
}
// Nested if (register)
let name = prompt("Masukan Username: ");
if (name.length >= 5) {
  let email = prompt("Masukan Email: ");
  if (email.length >= 5) {
    let pass = prompt("Masukan Password: ");
    if (pass.length <= 6) {
      alert("Password minimal 6 angka");
    } else {
      alert("Selamat, anda telah berhasil registerasi");
    }
  } else {
    alert("Email harus minimal 5 angka");
  }
} else {
  alert("Name harus minimal 5 angka");
}
// Switch
let nomorMakanan = Number(prompt("Masukkan nomor makanan: "));
switch (nomorMakanan) {
  case 1:
    alert("Nasi Goreng");
    break;
  case 2:
    alert("Soto Ayam");
    break;
  case 3:
    alert("Bubur Ayam");
    break;
  default:
    alert("Nomor yang anda masukkan tidak valid!");
    break;
}
