// Cara membuat promise
// Kita akan mencoba nya dengan study kasus mengubah warna background.
const changeBackground = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};
changeBackground("red", 1000)
  .then(() => changeBackground("yellow", 1000))
  .then(() => changeBackground("green", 1000))
  .then(() => changeBackground("blue", 1000))
  .then(() => changeBackground("purple", 1000))
  .then(() => changeBackground("skyblue", 1000));
