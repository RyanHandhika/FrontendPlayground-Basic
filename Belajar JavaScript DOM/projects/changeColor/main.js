// container
const container = document.getElementById("container");
container.style.height = "100vh";
container.style.display = "flex";
container.style.alignItems = "center";
container.style.justifyContent = "center";

// button
const button = document.createElement("button");
button.type = "button";
button.id = "btn";
button.innerHTML = "<b>Random Color</b>";
button.style.padding = "2rem";
button.style.fontSize = "2rem";
button.style.border = "none";
button.style.borderRadius = "10px";
button.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";

// merging
container.appendChild(button);

// random background color
const randomColor = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  const color = `rgb(${r}, ${g}, ${b})`;
  return color;
};

// add event
button.addEventListener("click", function () {
  const color = randomColor();
  document.body.style.backgroundColor = color;
  button.style.backgroundColor = color;
  button.innerText = color;
});

button.addEventListener("mouseover", function () {
  button.style.cursor = "pointer";
});
