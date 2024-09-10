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
