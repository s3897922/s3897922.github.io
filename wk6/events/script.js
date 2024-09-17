const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", myFunction);

function myFunction() {
  console.log("het did you just click me?");
}
