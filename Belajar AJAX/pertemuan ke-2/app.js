const ul = document.querySelector("#list_dad_jokes");
const btn = document.querySelector("button");

const addJokes = async () => {
  const textJoke = await getJokes();
  const newLi = document.createElement("li");
  newLi.append(textJoke);
  ul.append(newLi);
};

const getJokes = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (error) {
    return "No Jokes Available";
  }
};

btn.addEventListener("click", addJokes);
