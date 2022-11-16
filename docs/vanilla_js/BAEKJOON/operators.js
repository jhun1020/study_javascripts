// const fs = require("fs");

// const filepath2 =
//   process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
// let inputs2 = fs
//   .readFileSync(filepath)
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);
// // toString 앞의 데이터타입을 string로 바꿔주는 역할

// console.log(inputs2[0] + inputs2[1]);

// 문제
// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);
let a = inputs[0];
let b = inputs[1];

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);
// 나머지
console.log();
