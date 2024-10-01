const ball = document.querySelector(".ball");
console.log(ball);

const outer = document.querySelector(".outer");
console.log(outer);
let outerWidth = outer.clientWidth / 2;
console.log(outerWidth);

const moveButton = document.querySelector("#move-button");
console.log(moveButton);
moveButton.addEventListener("click", moveBall);

let distance = 0;
function moveBall() {
  if (distance < outerWidth) {
    distance += 30;
    console.log(distance);
    transformBall();
    // ball.style.transform = `translateX(${distance}px)`;
  }
  // distance += 30;
  // ball.style.transform = `translateX(${distance}px)`;
  // adding - before $ in distance = move the opposite way
  // translateY = move down
  // ball.style.transform = `translateX(${distance}px)`; ball.style.transform = `translateY(${distance}px)`; = travel diagonally
}

const rotateButton = document.querySelector("#rotate-button");
console.log(rotateButton);
rotateButton.addEventListener("click", rotateBall);

let angle = 0;
function rotateBall() {
  angle += 45;
  transformBall();
  //   ball.style.transform = `rotate(${angle}deg)`;
}

const scaleButton = document.querySelector("#scale-button");
console.log(scaleButton);
scaleButton.addEventListener("click", scaleBall);

let point = 1;
function scaleBall() {
  if (point > 0.22) {
    point -= 0.1;
    console.log(point);
    transformBall();
    // ball.style.transform = `scale(${point})`;
  }
}

function transformBall() {
  ball.style.transform = `translateX(${distance}px) rotate(${angle}deg) scale(${point})`;
}

const resetButton = document.querySelector("#reset-button");
console.log(resetButton);
resetButton.addEventListener("click", resetBall);
function resetBall() {
  distance = 0;
  angle = 0;
  point = 1;
  transformBall();
}
