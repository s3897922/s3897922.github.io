const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", myFunction);

let clickCount = 0;
const count = document.querySelector("#count");

function myFunction() {
  console.log("het did you just click me?");
  //   clickCount = clickCount +1;
  clickCount++;
  count.textConcent = clickCount;
}
