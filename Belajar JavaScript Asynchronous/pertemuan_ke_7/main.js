// Keyword await
// Keyword await ini hanya bisa kita gunakan didalam function dengan "async".
// Await akan melakukan jeda proses selanjut nya didalam function, menunggu promise yang dijalankan resolve.
// Contoh:
const changeBackground = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};
async function changeColor() {
  await changeBackground("red", 1000);
  await changeBackground("yellow", 1000);
  await changeBackground("green", 1000);
  await changeBackground("blue", 1000);
  await changeBackground("purple", 1000);
  await changeBackground("skyblue", 1000);
}
changeColor();
