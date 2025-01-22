// Cara menggunakan fungsi promise dengan benar.
// Contoh:
const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.round(Math.random() * 4000);
    setTimeout(() => {
      if (delay > 4000) {
        reject("Error: Connection Timeout");
      } else {
        resolve(`Success: ${url} (${delay}ms)`);
      }
    }, delay);
  });
};
requestPromise("movie.com")
  .then((result) => {
    console.log("Page 1");
    console.log(result);
    return requestPromise("movie.com");
  })
  .then((result) => {
    console.log("Page 2");
    console.log(result);
    return requestPromise("movie.com");
  })
  .then((result) => {
    console.log("Page 3");
    console.log(result);
    return requestPromise("movie.com");
  })
  .catch((err) => {
    console.log(err);
  });
