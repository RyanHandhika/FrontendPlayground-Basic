const getDataMovie = () => {
  listMovie.innerHTML = "";
  axios
    .get("https://api.tvmaze.com/search/shows", {
      params: {
        q: searchInput.value,
      },
    })
    .then(function (response) {
      for (i = 0; i < response.data.length; i++) {
        listMovie.innerHTML += `<div class="col-md-4 mt-3 mb-3">
          <div class="card">
            <img src="${response.data[i].show.image.medium}" class="card-img-top" alt="${response.data[i].show.name}" />
            <div class="card-body">
              <h5 class="card-title">${response.data[i].show.name}</h5>
              <p class="card-text">
                ${response.data[i].show.summary}
              </p>
              <a href="#" class="btn btn-primary">See Detail</a>
            </div>
          </div>
        </div>`;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const listMovie = document.querySelector("#list-movie");

searchButton.addEventListener("click", getDataMovie);
