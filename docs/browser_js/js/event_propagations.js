// let queryInputAll = document.querySelectorAll("input");
// // -> 리스트에 들어간 상태

// // 이터레이터방식으로  (내부적으로 사용할 변수 이름 of 가져올 리스트 이름)
// for (let queryInput of queryInputAll) {
//   queryInput.addEventListener("click", (event) => {
//     alert("clicked"); //모두 반응

//     // 2번째것만 반응하도록  ?? 이게 맞나
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }

// event.target 는 document.querySelector('#item1')  ('#item2') 와 같다

let newItem = `<li>
                <div>
                    <input type="checkbox" name="" id="item3">
                    <label for="item3">item three</label>
                    <span>
                    <i class="material-icons delete">delete</i>
                    </span>
                </div>
            </li>`;

let queryItemList = document.querySelector(".item-list");
queryItemList.addEventListener("click", (event) => {
  if (event.target.id != "" && event.target.id != "undefined") {
    alert(`clicked ${event.target.id} : ${event.target.value}`);
  }
  if (event.target.innerHTML == "delete") {
    // event.target.remove();
    // target된 아이콘만 지워짐  모두가 같이 지워지고 싶을 때 자기 상위를 지정
    // 상관, 상속관계에 의한 것들을 찾아서 지우는 법
    // event.target.parentElement.parentElement  처럼 원하는 곳까지 타고 올라가면 된다.
    event.target.parentElement.parentElement.parentElement.remove();
  }
});
// 상위 element에 event 설정 -> 하위 모두에 event 걸림  --> 이게 bubble방식
// queryItemList.innerHTML = queryItemList.innerHTML + newItem;
queryItemList.insertAdjacentHTML("beforeend", newItem);
// 기존 엘리먼트를 모두 삭제하고 새로 넣을때는 innerHTML
// 추가로 넣고 싶을 때는 insertAdjacentHTML

// let queryInputs = document.querySelectorAll("input");
// for (let queryInput of queryInputs) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }
