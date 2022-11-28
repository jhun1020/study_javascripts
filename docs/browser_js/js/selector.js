let elementbyId = window.document.getElementById("selector");
//   id를 찍어서 원하는 부분만 가져옴
// console.log(`elementById: ${elementbyId}`);
elementbyId.innerHTML = "<b>Change selector</b>";
//   selector wirh id 가 change selector로 바뀜
//   특정 값을 바꿔넣을 수 있다는 뜻

// --------------   11.20 --------------
let titleById = document.getElementById("title");
titleById.innerHTML = "Title By Id";
// 값을 넣음   DOM -> "Title By Id"
let listByClassName = document.getElementsByClassName("list");
console.log(`${listByClassName}`);
// id는 document로 단수 class는 documents로 복수
// 이유 : id는 unique한 값이지만 class는 아님

let buttonByTagName = document.getElementsByTagName("button");
console.log(`${buttonByTagName}`);
// 태그네임은 잘 안씀

// 쿼리셀렉터
let queryTitle = document.querySelector("#title");
queryTitle.innerHTML = "queryTitle!";

// 쿼리셀렉터all
let queryItems = document.querySelectorAll(".item");
queryItems.forEach((item, index) => {
  console.log(`${index} : ${item}`);
});

let queryLists = document.querySelectorAll(".list");
let queryList = document.querySelector(".list");
// 두개의 차이점 보기
// all은 모든 것을 다 가져옴
// 단수(selector)는 처음 만나는 것만 가져옴 (apple, azue, samsung, ibm)

//change properties from queryselector
queryTitle.style.color = "blue";
queryTitle.style.fontSize = "2rem";
queryTitle.style.backgroundColor = "rgba(255, 0, 0, 0.5)";

let queryContent = document.querySelector("#contentId");
