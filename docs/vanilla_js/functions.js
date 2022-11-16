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
