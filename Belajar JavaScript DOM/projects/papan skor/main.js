let p1SkorDisplay = document.getElementById("p1SkorDisplay");
let p2SkorDisplay = document.getElementById("p2SkorDisplay");

let p1Button = document.getElementById("p1Button");
let p2Button = document.getElementById("p2Button");
let resetButton = document.getElementById("resetButton");

let maxPoint = document.getElementById("maxPoint");

let skorP1 = 0;
let skorP2 = 0;
let winSkor = maxPoint.value;
let isGame = false;

resetButton.addEventListener("click", function () {
  skorP1 = 0;
  skorP2 = 0;
  isGame = false;
  p1SkorDisplay.innerText = skorP1;
  p2SkorDisplay.innerText = skorP2;
});

maxPoint.addEventListener("change", function () {
  winSkor = parseInt(maxPoint.value);
});

p1Button.addEventListener("click", function () {
  if (!isGame && !isNaN(winSkor)) {
    skorP1 += 1;
    if (skorP1 === winSkor) {
      isGame = true;
    }
    p1SkorDisplay.innerText = skorP1;
  }
});
p2Button.addEventListener("click", function () {
  if (!isGame && !isNaN(winSkor)) {
    skorP2 += 1;
    if (skorP2 === winSkor) {
      isGame = true;
    }
    p2SkorDisplay.innerText = skorP2;
  }
});
