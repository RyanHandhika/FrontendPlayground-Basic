// Perbedaan antara menggunakan callback function dengan promise.
// Callback Function
// Kode:
const requestCallback = (url, success, failure) => {
  const delay = Math.round(Math.random() * 4000);
  setTimeout(() => {
    if (delay > 4000) {
      failure(`Error: Connection Timeout`);
    } else {
      success(`Success: ${url} (${delay}ms)`);
    }
  }, delay);
};
// Panggil function
console.log(
  requestCallback(
    "google.com",
    function (response) {
      console.log(response);
      requestCallback(
        "google.com",
        function (response) {
          console.log(response);
          requestCallback(
            "google.com",
            function (response) {
              console.log(response);
              requestCallback(
                "google.com",
                function (response) {
                  console.log(response);
                  requestCallback(
                    "google.com",
                    function (response) {
                      console.log(response);
                    },
                    function (error) {
                      console.log(error);
                    }
                  );
                },
                function (error) {
                  console.log(error);
                }
              );
            },
            function (error) {
              console.log(error);
            }
          );
        },
        function (error) {
          console.log(error);
        }
      );
    },
    function (error) {
      console.log(error);
    }
  )
);

// Promise
// Promise adalah sebuah cara yang dilakukan oleh javascript untuk menghandle suatu proses atau function dan menghasilkan output object.
// Kode:
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
// Panggil function
requestPromise("google.com")
  .then((response) => {
    console.log(response);
    requestPromise("google.com")
      .then((response) => {
        console.log(response);
        requestPromise("google.com")
          .then((response) => {
            console.log(response);
            requestPromise("google.com")
              .then((response) => {
                console.log(response);
                requestPromise("google.com")
                  .then((response) => {
                    console.log(response);
                    requestPromise("google.com")
                      .then((response) => {
                        console.log(response);
                        requestPromise("google.com")
                          .then((response) => {
                            console.log(response);
                          })
                          .catch((error) => {
                            console.log(error);
                          });
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
