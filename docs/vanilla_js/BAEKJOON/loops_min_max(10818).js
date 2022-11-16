// 문제 (10818)
// + 조건 : object type 이용해서 풀어보기
// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

// 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다.
// 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다.
// 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

// 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

// 유추 파악  최대, 최소값 찾기
// 20 10 35 30 7
const fs = require("fs");
const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/BAEKJOON/txt/baek10818.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let statistics_obj = { min: inputs[0], max: inputs[0] }; // = min_max  // {min: 20, max: 20}

for (let i = 0; i < inputs.length; i++) {
  if (statistics_obj["min"] > inputs[i]) {
    statistics_obj["min"] = inputs[i];
  }
  if (statistics_obj["max"] < inputs[i]) {
    statistics_obj["max"] = inputs[i];
  }
}

console.log(`${statistics_obj["min"]} ${statistics_obj["max"]}`); // 7 35
console.log();
// map 먼저 하고 넘어간 차이?
// let count = Number(inputs[0]);    .length대신인것같다
// let nums = inputs[1].split(' ').map(x=>Number(x));  왜 index 1번부터지.. / x=> ??
