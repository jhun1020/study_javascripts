let querySingle = document.querySelector("#single");
// 이름 바꿔주기
querySingle.addEventListener("click", singlevent);
// (클릭 이벤트에 더블클릭(double-click), 롱클릭 등 여러 이벤트가 있다.)
function singlevent(event) {
  console.log(event);
  querySingle.innerHTML = "Take One Event!";
}
