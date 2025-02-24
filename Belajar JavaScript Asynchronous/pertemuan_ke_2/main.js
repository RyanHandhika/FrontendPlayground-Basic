// Callback Hell pada javascript
// Callback Hell adalah sebuah penulisan kode, yang terlalu menjorok kekanan.
// Ini menjadi salah satu ke khawatiran pada programmer javascript, karena kode akan sulit untuk dibaca dan yang pasti akan sangat membingungkan jika sudah sangat banyak.
// Contoh callback hell:
setTimeout(() => {
  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    document.body.style.backgroundColor = "yellow";
    setTimeout(() => {
      document.body.style.backgroundColor = "green";
      setTimeout(() => {
        document.body.style.backgroundColor = "blue";
        setTimeout(() => {
          document.body.style.backgroundColor = "orange";
          setTimeout(() => {
            document.body.style.backgroundColor = "pink";
            setTimeout(() => {
              document.body.style.backgroundColor = "brown";
              setTimeout(() => {
                document.body.style.backgroundColor = "gray";
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
// Bayangkan jika kode diatas semakin kompleks, dan semakin menjorok kekanan. Itu pasti akan menyulitkan kita untuk memperbaiki kode jika terjadi suatu masalah.
// Masalah ini, biasanya terjadi pada saat kita ingin melakukan request kedalam suatu server atau kedalam API atau ingin mendaparkan data dari backend.
// Sebenarnya ada cara yang lebih mudah dibandingkan callback hell ini, seperti promise.
// Untuk penjelasan nya, silahkan lanjut ke pertemuan ke 3.
