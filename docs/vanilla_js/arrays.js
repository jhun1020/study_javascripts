// Array    ArrayList와 비슷
let fruits = ["apple", "banana", "orange", "mellon"];
let numbers = [1, 2, 3, 4, 5];
// array에 빈공간 만들어주기   2가지방법
let fruits_init = new Array();
fruits_init = [];

//object    HashMap와 비슷
let objects = { name: "Tom", age: 4 };

let mixins_first = [1, 2, 3, "apple", 4, "mellon"];
let mixins_second = [1, 2, 3, "apple", { name: "Tom", age: 4 }];
let mixins_third = [1, 2, 3, "banana", objects];
let mixedins_fourth = [fruits, numbers];

let fruits_second = ["berry", "strawberry"];

const mixins_array = [
  ["apple", "banana"],
  ["orange", "mellon"],
  ["berry", "strawberry"],
];

fruconsole.log();
