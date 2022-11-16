// let fs = require("fs");

// // let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// // .펑션 이 동작하면 그 값을 리턴받고 그 다음 .펑션이 동작하고 ~~~  총 4번의 func가 동작한 것
// // 밑에서 각각 변수에 담아 진행과정을 살펴보자
// let readFileSync = fs.readFileSync("/dev/stdin");
// let toString = readFileSync.toString();
// let trim = toString.trim();
// let split = split.split(" ");

// console / log();

// ------------------------------
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);
// toString 앞의 데이터타입을 string로 바꿔주는 역할

console.log(inputs[0] + inputs[1]);
