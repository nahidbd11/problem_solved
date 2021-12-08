function squareDigits(num) {
  let num_str = num.toString();
  let squareNum = parseInt(
    num_str
      .split("")
      .map((str) => {
        let num = parseInt(str);
        return Math.pow(num, 2);
      })
      .join("")
  );
  return squareNum;
}

console.log(squareDigits(1234));
