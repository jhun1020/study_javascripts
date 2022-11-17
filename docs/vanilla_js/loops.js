const animals = ["dog", "cat", "bird", "fish", "lizard"];

//Normal
for (i = 0; i < animals.length; i++) {
  console.log(`${animals[i]}`);
}

// for iterable  배열을 순서적으로 뽑아줌
//   (let)새로지칭할변수 of 기존변수   새로 만든 변수라면 let const 써야함
//
for (let animal of animals) {
  console.log(`${animal}`);
}


// ------------------
const cars = ["BMW", "VOLVO", "Mini"];
for (let car of cars) {
  console.log(`${car}`);
}

console.log();

//   ==>  for iterable 을 forEach로
cars.forEach(car) => console.log(`${car}`);



//---------------------------
// forEach    
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

//  1) Arrow Function    // => 기준으로 앞은 파라미터, 오른쪽은 {}기능
let arrowFunction = element => console.log(element);
// 같은 표현 = (element) => {console.log(element)};
array1.forEach(arrowFunction);


//  2)  Normal Function
function elementNormal()