function calculateFactorial() {
  const num = parseInt(document.getElementById("number").value);

  if (isNaN(num) || num < 0) {
    steps = "1";
    document.getElementById("results").innerText = "Enter a positive number.";
    return;
  } else {
    fact = 1;
    i = 1;
    do {
      steps =fact;
      fact *= i;
      document.getElementById("results").innerHTML += `${steps} * ${i} = ${fact}<br>`;
      i++;
    } while (i <= num);
    document.getElementById("results").innerHTML += `The factorial of ${num} is ${fact}`;
  }
}
