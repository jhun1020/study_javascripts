console.log(`first`);
// console.log(`second`);
// setTimeout(functionRef, delay);  딜레이  2000  -> 2초?

setTimeout(function () {
  console.log(`setTimeout : second`);
}, 2000); //func는 한번만 사용할거니까 여기에서 쓸거고 변수에 안담아도 되니까 anonymous로 쓸게
// func의 파라미터는 지금 받아서 쓸 이유가 없으니까 일단 안적은듯하다
// 딜레이 타임동안 멈췄다 시작함
// 위부터 차례로 내려오는게 순서지만 딜레이가 있기 때문에
console.log(`third`);

// 결과적으로 출력 순서는
// first
// third
// second  가 된다.   나중에 실행되게 하는 것
// 네트워크 상에서 특정한 위치에 있는 값을 가져올 때 자주 사용
// ex)

// ------------------------------
//5 + 6
function plus(first, second) {
  return first + second;
}
// plus(5, 6);

// 5 - 6
function minus(first, second) {
  return first - second;
}
minus(5, 6);

function callbackFunction(callback, first, second) {
  // callback이 plus라고 생각하라는데 뭔말인지모르겠다.  -> 뒤를 보면 콜백자리에서 함수를 호출하는거였다.
  let result = callback(first, second);
  console.log(`result : ${result}`);
}

callbackFunction(plus, 5, 6); //callback자리에 함수 plus를 넣어줌
callbackFunction(minus, 5, 6);
