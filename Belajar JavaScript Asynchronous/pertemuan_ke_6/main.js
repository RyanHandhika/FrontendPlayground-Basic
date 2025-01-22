// Fungsi Async keyword.
// Fungsi async akan otomatis menjadi promise.
// Jika terdapat data didalam fungsi tersebut, maka resolve akan mengirimkan data yang bisa diolah.
// Jika terdapar object throw error didalam fungsi tersebut, maka akan menjalankan bagian reject.
// Contoh:
const hello = async () => {
  return "Hellooo";
  // throw "Siapa ya?";
};
hello()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
