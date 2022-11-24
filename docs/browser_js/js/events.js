function changeText() {
  let queryChangeText = document.querySelector("#changetext");
  queryChangeText.innerHTML = "change on me!";

}

// let queryClickalert = document.querySelector("#clickalert");

let queryClickalert = document.querySelector("#clickalert");
queryClickalert.addEventListener("click", clickAlert);
// 형식 : element.addEventListener(event, function, useCapture)
// 특정 엘리먼트에 onclick하던 것과 똑같이 정의할 수 있다. useCapture는 사용하지않아도됨
function clickAlert() {
  alert("click on me!");
}

let queryButton = document.querySelector("#buttonChangeText");
queryButton.addEventListener("click", targetText);

function targetText() {
  let queryTargetText = document.querySelector("#targetText");
  queryTargetText.innerHTML = "Target Text!";
}
