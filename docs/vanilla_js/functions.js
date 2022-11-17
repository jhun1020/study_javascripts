// 형식  !! 리턴값을 쓰지 않음
// function name(parameter1, parameter2, parameter3) {
//     code to be excoted
// return
// }

// 1 + 3
// param : 2(1,3), return1( 1 + 3) =>
// function sum(1, 3){
//     return 1 + 3;
// }
// 이럼녀 재사용이 안되니까 각각을 변수로 바꿔서
function sum(item_first, item_second) {
  return item_first + item_second;
}

{
  let sum_number = 1 + 3;
  sum_number = 3 + 5;
  sum_number = 6 + 9;
  let sum_function = sum(1, 2); // item_first = 1, item_second = 2
}

//  ## 함수를 변수처럼 담는 법
//  1. 함수를 만든다. ->  anonymous Function  이름없는펑션
//  2. 변수를 선언해 담는다.
let calculate_sum = function (item_first, item_second) {
  return item_first + item_second;
};
//  3. 변수를  함수처럼 사용
console.log(`#{calculate_sum(5, 7)}`);

//  !! 이름없는펑션을 통해 arrow func를 사용하기 위해 설명한 것.

//  ## Arrow Function    가장 많이 씀
// 1. 이름도, 펑션도 지워버림
// 2. 파라미터와 스코프{} 사이에 => 를 넣음.
// 3. 변수에 담는다.
let calculate_sum_second = (item_first, item_second) => {
  return item_first + item_second;
};
let result = calculate_sum_second(7, 8);
// 4. 사용
console.log(`${calculate_sum_second(7, 8)}`);
// or
console.log(`${result}`);

//rest parameters     ...
function printRestParams(...args) {
  let restParam = (arg) => {
    console.log(`arg : ${arg}`);
  };
  args.forEach(restParam);
}

printRestParams(2, 4, 5);
printRestParams(2, 4, 5, 6, 7);
