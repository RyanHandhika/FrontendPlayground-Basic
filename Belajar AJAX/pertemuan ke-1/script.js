// Melakukan Request Sederhana Menggunakan XMLHttpRequest

// const req = new XMLHttpRequest();
// let data;

// req.onload = function () {
//   data = JSON.parse(this.responseText);
//   console.log(this);
// };

// req.onerror = function () {
//   console.log("Error", this);
// };

// req.open("GET", "https://swapi.dev/api/people/4");
// myreq.setRequestHeader("Accept", "Application/json")
// req.send();

// Melakukan Request Sederhana Menggunakan Fetch

// fetch("https://swapi.dev/api/people/4")
//   .then((res) => {
//     if (!res.ok) {
//       throw Error("Could not fetch the data for that resource");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log("json 1", data);
//     return fetch("https://swapi.dev/api/people/2");
//   })
//   .then((res) => {
//     console.log("Request 2");
//     if (!res.ok) {
//       throw Error("Could not fetch the data for that resource");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

// Melakukan Request Sederhana Menggunakan async await

// const loadPeople = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/2");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.dev/api/peopleasd/4");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch {
//     console.log("error");
//   }
// };

// loadPeople();

// Melakukan Request Sederhana Menggunakan library axios
// axios
//   .get("https://swapi.dev/api/people/100")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//     alert(err.message);
//   });

// const getPeople = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//     console.log(res.data);
//   } catch {
//     console.log(error);
//     console.log(error.message);
//     console.log(error.response.status);
//     console.log(error.response.data);
//   }
// };
