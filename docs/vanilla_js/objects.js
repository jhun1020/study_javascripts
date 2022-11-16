// 오브젝트타입의 기본 형식 let animal = {key : value, key : value, key : value, key : value}
let animal = { name: "juju", species: "cat" };

// 출력 방법 1
console.log(animal.name);
// 출력 방법 2
console.log(animal["species"]);

let animal_keys = Object.keys(animal);
// 리턴된 데이터 타입은 array    ==>  for문돌릴 수 있따.
for (let key of animal_keys) {
  console.log(`${key} : ${animal[key]}`);
}

const animals_obj = [
  // animal,
  { name: "dog", species: "canine" },
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];

for (let animal of animals_obj) {
  console.log(`${animal["name"]}, ${animal["species"]}`);
}
console.log();
