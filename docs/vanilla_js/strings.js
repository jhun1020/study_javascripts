let number_first = 3;
let string_second = "5";

//  !!! 변수 +로 결합할 때 백틱??(``) 을 사용해라  아니면 곤란한 경우가 생길수도
console.log(number_first + string_second);
// 35
`${number_first}${string_second}`;
//35  이 방법을 추천
console.log(number_first - string_second);
// -2
console.log(number_first * string_second);
// 15

string_second = "A";
console.log(number_first + string_second);
// 3A
console.log(number_first - string_second);
// NaN   연산 불가
console.log(number_first * string_second);
// NaN   연산 불가

// Strings
let animal = "tiger";
// 자바스크립트에선 ' 와 "가 똑같음.
console.log(`${animal}`);

let sentance = "  5 2 6 ";
let trims = sentance.trim(); // " " 공백 제거
let splits = trims.split(" "); // 공백제거 한 것을 배열로 만든다
// split각각의 값이 모두 string값으로 나옴
// 5 2 6을 모두 합치고 싶다면 number 여야 정상정으로 연산 가능
//  ==> split한 후 number 로 바꿔줘야함
let maps = splits.map(Number); // 각 배열을 string to number
let inputs = sentance.trim().split(" ").map();   이렇게 chain func를 쓴다면 각각 변수선언 안하고 연달아 사용 가능

console.log(maps[0] + maps[1] + maps[2]);
console.log(inputs[0]+inputs[1]+inputs[2])
console.log();



