"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("start");
  document.querySelector("#button").addEventListener("click", getResult);
}

function getResult() {
  const str = document.querySelector("#addtext").value;

  function mockify(str) {
    return str
      .split("")
      .map((letter, randomIndex) => {
        randomIndex = Math.floor(Math.random() * 20);
        if (randomIndex > 15) {
          console.log(randomIndex);
          return letter.toUpperCase();
        } else if (randomIndex > 10) {
          console.log(randomIndex);
          return letter.toLowerCase();
        } else if (randomIndex > 5) {
          console.log(randomIndex);
          return letter.toUpperCase();
        } else {
          console.log(randomIndex);
          return letter.toLowerCase();
        }
      })
      .join("");
  }

  let output = mockify(str);

  console.log(output);

  document.querySelector("#result").value = output;
}