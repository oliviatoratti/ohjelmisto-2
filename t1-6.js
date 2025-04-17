"use strict";

const answer = confirm("Should I calculate the square root?");
const output = document.getElementById("output");

if (answer) {
  const input = confirm("Give a number.");
  const num = parseFloat(input);

  if (answer) {
    const input = prompt("Give a number.");
    const num = parseFloat(input);

    if (!isNaN(num)) {
      if (num < 0) {
        output.textContent = "The square root of a negative number is not defined.";
      } else {
        const sqrt = Math.sqrt(num)
        output.textContent = "The square root of " + num + " is " + sqrt + ".";
      }
    } else {
      output.textContent = "Invalid input. Try again.";
    }
  } else {
    output.textContent = "The square root is not calculated.";
  }
}