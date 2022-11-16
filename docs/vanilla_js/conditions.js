let num = 5;

if (true) {
  //  && and    /  || or
  console.log("print!");
}
if (20 < num) {
  console.log(`20 < ${num}`);
} else if (20 > num) {
  console.log(`20 > ${num}`);
} else {
  console.log(`done`);
}

// Ternay operator  삼항연산자
// 조건식이 참이면 왼쪽, 거짓이면 오른쪽
let condition = 20 < num ? console.log(`20 < ${num}`) : `done`;

console.log();
