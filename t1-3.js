"use strict";

const luku1 = parseInt(prompt("Anna luku (1/3): "));
const luku2 = parseInt(prompt("Anna luku (2/3): "));
const luku3 = parseInt(prompt("Anna luku (3/3): "));

const sum = luku1 + luku2 + luku3;
const product = luku1 * luku2 * luku3;
const average = (luku1 + luku2 + luku3) / 3;

document.getElementById("results").innerHTML = `
                ✅ Sum: ${sum} <br>
                ✅ Product: ${product} <br>
                ✅ Average: ${average}
            `;