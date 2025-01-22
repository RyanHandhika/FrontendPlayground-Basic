// Mengelola kondisi error dengan async await.
const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.round(Math.random() * 4000);
    setTimeout(() => {
      if (delay > 2000) {
        reject("Error: Connection Timeout");
      } else {
        resolve(`Success: ${url} (${delay}ms)`);
      }
    }, delay);
  });
};
async function requestHandler() {
  try {
    let result = await requestPromise("google.com");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
requestHandler();
