"use strict";

//call back

function multiply(sk1, sk2, callback) {
  const result = sk1 * sk2;
  //   return result;
  callback(result);
}

function displayValue(val) {
  console.log(`The value is ${val}`);
}

function outHtmlValue(val) {
  //sukuria nauja p elementa
  // i jo vidu iraso 'The value is <val>'
  //patalpina el body apacioje
  const pEl = document.createElement("p");
  pEl.textContent = `The value is ${val}`;
  document.body.append(pEl);
}
outHtmlValue();

// 10, 100
// const calcAmount = multiply(10, 100);
// displayValue(calcAmount);
// outHtmlValue(calcAmount);

multiply(10, 100, outHtmlValue);
