// div.inner 태그  내부에 <div>Hello</div>를 추가
// 1) 프로그래밍 방식 적용
let queryInner = document.querySelector("#container > .inner");

element = document.createElement("div");
// ==>  <div></div>
helloText = document.createTextNode("hello");
// ==> "hello"
//  ----> 구조상 어디에도 속하지 않은 div와 text생성됨
element.appendChild(helloText);
// 여기까지가 <div> hello </div>
queryInner.appendChild(element);

// 2) innerHTML
/* <div class="item"></div>에 텍스트 입력하기 */
let animal = { name: "dog", age: 10 };
// 이 내용을 풀어헤쳐서 밑의 queryApp에 넣으려고 하는것
let queryApp = document.querySelector("#app");
let item = "<div class='item'>" + animal["name"] + animal["age"] + "</div>";
// item = `<div class="item">${animal["name"]} ${animal["age"]}</div>`  같은 표현인데 이게 더 편함
queryApp.innerHTML = item;

// ----------------
const productsData = [
  { title: "감자칩", weight: 300 },
  { title: "칙촉", weight: 100 },
  { title: "고구마칩", weight: 300 },
];
let Lists = document.querySelector("#list");

// let p_data = `<div id="list"> ${productsData[0]["title"]} : ${productsData[0]["weight"]} </div> \n
//               <div id="list"> ${productsData[1]["title"]} : ${productsData[1]["weight"]} </div> \n
//               <div id="list"> ${productsData[2]["title"]} : ${productsData[2]["weight"]} </div> `;
let p_data2;
productsData.forEach((element) => {
  p_data2 = `<div id="list"> ${element["title"]} : ${element["weight"]} </div>`;
  Lists.innerHTML += p_data2;
});
