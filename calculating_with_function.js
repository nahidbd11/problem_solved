/******
 * TODO:
 * seven(times(five())); // must return 35
 *four(plus(nine())); // must return 13
 *eight(minus(three())); // must return 5
 *six(dividedBy(two())); // must return 3
 *
 * FIXME:
 * 
    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

 */

/***
 * !my solution
 */
function zero(operationfn) {
  let num = 0;
  return doCalculation(num, operationfn);
}

function one(operationfn) {
  let num = 1;
  return doCalculation(num, operationfn);
}
function two(operationfn) {
  let num = 2;
  return doCalculation(num, operationfn);
}
function three(operationfn) {
  let num = 3;
  return doCalculation(num, operationfn);
}

function four(operationfn) {
  let num = 4;
  return doCalculation(num, operationfn);
}
function five(operationfn) {
  let num = 5;
  return doCalculation(num, operationfn);
}
function six(operationfn) {
  let num = 6;
  return doCalculation(num, operationfn);
}
function seven(operationfn) {
  let num = 7;
  return doCalculation(num, operationfn);
}
function eight(operationfn) {
  let num = 8;
  return doCalculation(num, operationfn);
}
function nine(operationfn) {
  let num = 9;
  return doCalculation(num, operationfn);
}
/*****operation */
function plus(numbfn) {
  let sign = "plus";
  return { numbfn, sign };
}
function minus(numbfn) {
  let sign = "minus";
  return { numbfn, sign };
}
function times(numbfn) {
  let sign = "times";
  return { numbfn, sign };
}
function dividedBy(numbfn) {
  let sign = "dividedBy";
  return { numbfn, sign };
}

function doCalculation(numb, operationfn) {
  if (operationfn) {
    const { numbfn, sign } = operationfn;
    switch (sign) {
      case "plus":
        return numb + numbfn;
      case "minus":
        return numb - numbfn;
      case "times":
        return numb * numbfn;
      case "dividedBy":
        return Math.trunc(numb / numbfn);
    }
  }
  return numb;
}

let check = four(plus(three()));
console.log(check);

/*****8
 * ? clever solution
 */

// [
//   "zero",
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
// ].forEach(function (name, n) {
//   this[name] = function (f) {
//     return f ? f(n) : n;
//   };
// });

// function plus(n) {
//   return function (a) {
//     return a + n;
//   };
// }
// function minus(n) {
//   return function (a) {
//     return a - n;
//   };
// }
// function times(n) {
//   return function (a) {
//     return a * n;
//   };
// }
// function dividedBy(n) {
//   return function (a) {
//     return a / n;
//   };
// }

// let result = two(plus(three()));

// console.log(result);
