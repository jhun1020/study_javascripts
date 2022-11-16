var var_first = 1;
let let_first = 10;
// 변수를 선언하고 안에서 사용할 때와 밖에서 사용할 때의 차이점
// 변수를 사용할 수 있는 영역을 보기 위함

//  1. 브라켓 밖에서 변수 선언한 경우
{
  //브라켓이라고 한다. { }
  console.log(`In let_first ${let_first}`);
  //   ` ` 안에 ${}사용해서 변수 사용 = 머스테시? 머스티시?
}
console.log(`Out let_first ${let_first}`);

// 둘 다 실행됨

// 2. 브라켓 안에서 변수 선언한 경우
{
  let let_second = 20;
  console.log(`In let_second ${let_second}`);
}
// console.log(`Out let_second ${let_second}`);  ==> 에러 발생

// 밖에선 실행 안됨

// check typeof
typeof let_first;
// 타입오브 하고 변수명 선언하면 됨. 한번 출력해보자]
console.log(`typeof let_first : ${typeof let_first}`);
// typeof let_first : number 결과 출력
let_first = "good";
console.log(`typeof let_first : ${typeof let_first}`);
// typeof let_first : string 결과 출력
console.log();
