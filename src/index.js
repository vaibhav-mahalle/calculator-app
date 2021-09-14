import "./styles.css";

var addition = document.querySelector("#add");
var sub = document.querySelector("#sub");
var mult = document.querySelector("#mult");
var divide = document.querySelector("#div");

var input1 = document.querySelector("#input-1");
var input2 = document.querySelector("#input-2");

var output = document.querySelector("#output");

function addclickHandler() {
  var answer = parseInt(input1.value) + parseInt(input2.value);
  output.innerText = answer;
}

function subclickHandler() {
  var answer = input1.value - input2.value;
  output.innerText = answer;
}

function multclickHandler() {
  var answer = input1.value * input2.value;
  output.innerText = answer;
}

function divclickHandler() {
  var answer = input1.value / input2.value;
  output.innerText = answer;
}

addition.addEventListener("click", addclickHandler);
sub.addEventListener("click", subclickHandler);
mult.addEventListener("click", multclickHandler);
divide.addEventListener("click", divclickHandler);
