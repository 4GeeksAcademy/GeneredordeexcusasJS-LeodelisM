/* eslint-disable */
import "bootstrap";
import "./style.css";

function seleccionarElementoAleatorio(arr) {
  let idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let randomWho = seleccionarElementoAleatorio(who);
  let randomAction = seleccionarElementoAleatorio(action);
  let randomWhat = seleccionarElementoAleatorio(what);
  let randomWhen = seleccionarElementoAleatorio(when);

  let randomExcuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

  let excuseElement = document.querySelector("#excuse");
  excuseElement.innerHTML = randomExcuse;
};
