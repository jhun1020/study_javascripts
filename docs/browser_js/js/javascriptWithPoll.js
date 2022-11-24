let input_answers = [1, 2, 4, 3, 1];

const questions_list = [
  {
    question: "해당 매장을 방문시 매장은 청결 하였습니까?",
    questions_uid: "Q1",
    order: 1,
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
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    questions_uid: "Q5",
    order: 4,
  },
  {
    question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    questions_uid: "Q4",
    order: 5,
  },
];

const example_list = [
  { example: "전혀 아니다", example_uid: "E1", order: 1 },
  { example: "아니다", example_uid: "E2", order: 2 },
  { example: "보통이다", example_uid: "E3", order: 3 },
  { example: "그렇다", example_uid: "E4", order: 4 },
  { example: "매우 그렇다", example_uid: "E5", order: 5 },
];

const answers = [
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

// -----------------------------------------------------------------------
let question_compare;
let polls = []; // 외부 묶음
let questions = {}; // 내부 묶음
let answer_uids = []; // 내부 설문 답변 묶음

// 초기화면 body지정
let survey = document.querySelector("#survey");

// 버튼 생성 후 설문과 연결
let queryButton = document.querySelector("#nextBtn");

// 버튼에 이벤트 추가
queryButton.addEventListener("click", nextBtn());

for (let idx = 0; idx < answers.length; idx++) {
  if (question_compare != answers[idx]["questions_uid"]) {
    // 일치하지 않는다면 배열에 값을 넣어줄건데
    // q1 과 e123을 넣을 예정
    if (Object.keys(questions).length > 0) {
      questions["answers_uid"] = answer_uids;
      polls.push(questions);
      questions = {};
      answer_uids = [];
    }
    questions["questions_uid"] = answers[idx]["questions_uid"];
    // questions는 임시로 거쳐가는 배열

    answer_uids.push(answers[idx]["example_uid"]);
  } else {
    answer_uids.push(`questions_uid : ${answers[idx]["example_uid"]}`);
  }
  question_compare = answers[idx]["questions_uid"];
}
//  polls배열에 값이 들어가 있는 것 까지 -----

// 질문 출력
survey.innerHTML = nextBtn(questions_list[0]["questions_uid"]);

// 질문 출력 func
function nextBtn(element) {
  let question_desc;
  // 배열을 풀어서    // list = {question :"ㅁ" , questions_uid : "ㄴ", order : "ㄷ"}  이상태
  for (list of questions_list) {
    if (list["questions_uid"] == element) {
      // 질문을 desc에 담고 return
      question_desc = list["question"];
    }
  }
  return question_desc;
}
// for (let i = 0; i < questions_list.length; i++) {
//   survey.innerHTML = nextBtn(questions_list[i]["questions_uid"]);
// }
