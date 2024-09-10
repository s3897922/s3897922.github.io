function checkGrade() {
  const a1 = document.querySelector("#answer1");
  console.log(a1.value);
  const a2 = document.querySelector("#answer2");
  console.log(a2.value);
  // let total = a1.value + a2.value;
  let a1value = parseFloat(a1.value);
  let a2value = parseFloat(a2.value);
  let sum = calculateTotal(a1value, a2value);
  //   let sum = parseFloat(a1.value) + parseFloat(a2.value);
  console.log("sum is", sum);
  sendReport(sum);
}

function calculateTotal(a, b) {
  let total = a + b;
  return total;
}

function sendReport(score) {
  const report = document.querySelector("#report");
  console.log(report);
  if (score > 30) {
    console.log("you got HD");
    report.textContent = "you got HD";
  } else if (score > 20 && score <= 30) {
    console.log("you got a D");
    report.textConcent = "you got a D";
  }
}

const para = document.querySelector("p");
console.log(para);

const allPara = document.querySelectorAll("p");
console.log(allPara);

const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.textContent);
h1.classList.add("red-style");

const myCat = document.querySelector("#my-cat");
console.log(myCat);
myCat.classList.add("round");

function toggleMe() {
  myCat.classList.toggle("round");
}
