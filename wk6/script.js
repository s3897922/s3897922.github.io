function checkGrade() {
  const a1 = document.querySelector("#answer1");
  console.log(a1.value);
  const a2 = document.querySelector("#answer2");
  console.log(a2.value);
  // let total = a1.value + a2.value;
  let total = parseFloat(a1.value) + parseFloat(a2.value);
  console.log("sum is", total);
}

function calculateTotal(a, b) {
  let total = a + b;
  return total;
}
