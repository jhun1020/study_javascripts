let querySingle = document.querySelector("#single");
// 이름 바꿔주기
querySingle.addEventListener("click", singlevent);
// (클릭 이벤트에 더블클릭(double-click), 롱클릭 등 여러 이벤트가 있다.)
function singlevent(event) {
  console.log(event);
  querySingle.innerHTML = "Take One Event!";
}
// --------------------------------

let queryKeydown = document.querySelector("#keydown");
queryKeydown.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.code == "Enter") {
    keydownDesc(queryKeydown.target);
  }
});

function keydownDesc(desc) {
  let queryKeydownDesc = document.querySelector("#keydownDesc");
  queryKeydownDesc.innerHTML = desc;
}

let queryload = document.querySelector("#keydownDesc");
queryload.addEventListener("load", queryLoad);

function queryLoad() {
  queryload.innerHTML = "Done On Load!";
}
