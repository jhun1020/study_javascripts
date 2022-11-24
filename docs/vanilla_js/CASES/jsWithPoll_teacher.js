const fs = require("fs");

const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/CASES/case_inputs.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

let questions = [
  {
    question: "해당 매장을 방문시 매장은 청결 하였습니까?",
    questions_uid: "Q1",
    order: "1",
  },
  {
    question: "주문시 직원은 고객님께 친절 하였습니까?",
    questions_uid: "Q2",
    order: 2,
  },
  {
    question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    questions_uid: "Q3",
    order: 3,
  },
  {
    question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    questions_uid: "Q4",
    order: 4,
  },
  {
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    questions_uid: "Q5",
    order: 5,
  },
];

let answers = [
  { example: "(1) 전혀 아니다", example_uid: "E1", order: 1 },
  { example: "(2) 아니다", example_uid: "E2", order: 2 },
  { example: "(3) 보통이다", example_uid: "E3", order: 3 },
  { example: "(4) 그렇다", example_uid: "E4", order: 4 },
  { example: "(5) 매우 그렇다", example_uid: "E5", order: 5 },
];

const answers2 = [
  { questions_uid: "Q1", example_uid: "E1" },
  { questions_uid: "Q1", example_uid: "E2" },
  { questions_uid: "Q1", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E1" },
  { questions_uid: "Q2", example_uid: "E2" },
  { questions_uid: "Q2", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E4" },
  { questions_uid: "Q3", example_uid: "E1" },
  { questions_uid: "Q3", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E1" },
  { questions_uid: "Q4", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E3" },
  { questions_uid: "Q4", example_uid: "E4" },
  { questions_uid: "Q4", example_uid: "E5" },
  { questions_uid: "Q5", example_uid: "E1" },
  { questions_uid: "Q5", example_uid: "E2" },
  { questions_uid: "Q5", example_uid: "E3" },
];
let question_compare;
let idx;
for (idx = 0; idx < answers.length; idx++) {
  if (question_compare == answers[idx]["questions_uid"]) {
    console.log(
      `== : ${answers[idx]["questions_uid"]}, ${answers[idx]["example_uid"]}`
    );
  } else {
    console.log(
      `!= : ${answers[idx]["questions_uid"]}, ${answers[idx]["example_uid"]}`
    );
  }

  question_compare = answers[idx]["questions_uid"];
}
console.log(`${answers.length}, ${idx}`);

function questions_display(element) {
  let question =
    questions[element]["order"] + ". " + questions[element]["question"];
  console.log(`${question}`);
}

// function answers_display(...args) {
//   let answer = (arg) => console.log(`${answers[arg]["example"]}`);
//   args.forEach(answer);
// }

// let user_answer_display = function user_answer(element) {
//   console.log(`답)  (${inputs[element]})`);
// };

// for (let i = 0; i < questions.length; i++) {
//   questions_display(i); // 질문
//   switch (i) {
//     case 0:
//       answers_display(0, 1, 2); //답항
//       user_answer_display(i); //대답
//       break;

//     case 1:
//       answers_display(0, 1, 2, 3);
//       user_answer_display(i);
//       break;

//     case 2:
//       answers_display(0, 1);
//       user_answer_display(i);
//       break;

//     case 3:
//       answers_display(0, 1, 2, 3, 4);
//       user_answer_display(i);
//       break;

//     case 4:
//       answers_display(0, 1, 2);
//       user_answer_display(i);
//       break;
//   }
//   console.log(" ");
// }

console.log("-------------------설문자 선택--------------------");
for (i = 0; i < questions.length; i++) {
  questions_display(i); // 질문

  let answer_value = inputs[i] - 1; //인덱스값은 번호보다 1 적으니까 -1   // 답변
  console.log(`${answers[answer_value]["example"]}`);
  console.log(" ");
}

console.log("이용해주셔서 감사합니다!");
