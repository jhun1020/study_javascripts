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
