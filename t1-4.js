"use strict";

const name = prompt("What is your name?");
const num = Math.random(4);

let house;
if (num === 1) {
  house = "Gryffindor";
} else if (num === 2) {
  house = "Slytherin";
} else if (num === 3) {
  house = "Ravenclaw";
} else {
  house = "Hufflepuff";
}

document.getElementById("result").innerText = name + ", you are " + house + ".";