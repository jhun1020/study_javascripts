// 문제 (9498)
// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
// 첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

// 유추파악
// 입력 받고 점수출력

// 입력  백준예제 입력 복사해서 넣었다.
let fs = require("fs");

let filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/BAEKJOON/txt/baek9498.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);
let a = inputs[0];
// 출력
if (a >= 90) {
  console.log("A");
} else if (a >= 80) {
  console.log("B");
} else if (a >= 70) {
  console.log("C");
} else if (a >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// -------------------------------------------------------
// 문제 (2753)
// 연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.
// 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
// 예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다. 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다.
// 하지만, 2000년은 400의 배수이기 때문에 윤년이다.

// 첫째 줄에 연도가 주어진다. 연도는 1보다 크거나 같고, 4000보다 작거나 같은 자연수이다.

// 첫째 줄에 윤년이면 1, 아니면 0을 출력한다.

// 유추파악
// 윤년이면 1 아니면 0, 4의 배수, 400의배수는 윤년,  100의배수면 윤년 아님.

// 입력
fs = require("fs");

filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/BAEKJOON/txt/baek2753.txt";
inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);
let b = inputs[0];

// 출력
if (b % 400 == 0) {
  console.log("1");
} else if (b % 100 == 0) {
  console.log("0");
} else if (b % 4 == 0) {
  console.log("1");
} else {
  console.log("0");
}

// --------------------------------------------------
// 문제 (14681)
// 흔한 수학 문제 중 하나는 주어진 점이 어느 사분면에 속하는지 알아내는 것이다. 사분면은 아래 그림처럼 1부터 4까지 번호를 갖는다. "Quadrant n"은 "제n사분면"이라는 뜻이다.
// 예를 들어, 좌표가 (12, 5)인 점 A는 x좌표와 y좌표가 모두 양수이므로 제1사분면에 속한다. 점 B는 x좌표가 음수이고 y좌표가 양수이므로 제2사분면에 속한다.
// 점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.

// 첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0) 다음 줄에는 정수 y가 주어진다. (−1000 ≤ y ≤ 1000; y ≠ 0)

// 점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.

// 유추파악 0이아닌 정수를 받고 1234 사분면에 배치
// 입력
fs = require("fs");

filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/BAEKJOON/txt/baek17681.txt";
inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);
let c = inputs[0];
let d = inputs[1];

// 출력
if (c > 0 && d > 0) {
  console.log("1");
} else if (c < 0 && d > 0) {
  console.log("2");
} else if (c < 0 && d < 0) {
  console.log("3");
} else if (c > 0 && d < 0) {
  console.log("4");
}

// ------------------------------------------------

// 문제 (2884)
// 상근이는 매일 아침 알람을 듣고 일어난다. 알람을 듣고 바로 일어나면 다행이겠지만, 항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다.
// 상근이는 모든 방법을 동원해보았지만, 조금만 더 자려는 마음은 그 어떤 것도 없앨 수가 없었다.
// 이런 상근이를 불쌍하게 보던, 창영이는 자신이 사용하는 방법을 추천해 주었다.
// 바로 "45분 일찍 알람 설정하기"이다.
// 이 방법은 단순하다. 원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸는 것이다. 어차피 알람 소리를 들으면, 알람을 끄고 조금 더 잘 것이기 때문이다. 이 방법을 사용하면, 매일 아침 더 잤다는 기분을 느낄 수 있고, 학교도 지각하지 않게 된다.

// 현재 상근이가 설정한 알람 시각이 주어졌을 때, 창영이의 방법을 사용한다면, 이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.

// 첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 그리고 이것은 현재 상근이가 설정한 놓은 알람 시간 H시 M분을 의미한다.

// 입력 시간은 24시간 표현을 사용한다. 24시간 표현에서 하루의 시작은 0:0(자정)이고, 끝은 23:59(다음날 자정 1분 전)이다. 시간을 나타낼 때, 불필요한 0은 사용하지 않는다.

// 출력
// 첫째 줄에 상근이가 창영이의 방법을 사용할 때, 설정해야 하는 알람 시간을 출력한다. (입력과 같은 형태로 출력하면 된다.)

// 유추파악
// h와 m을 입력 받고 45분씩 빼기.
fs = require("fs");

filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/BAEKJOON/txt/baek2884.txt";
inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

let h = inputs[0];
let m = inputs[1];
let sub = m - 45;

if (m >= 45) {
  console.log(`${h} ${sub}`);
} else {
  if (h == 0) {
    h = 24;
  }
  console.log(`${h - 1} ${60 - (45 - m)}`);
  console.log();
}

// ----------------------------------------------

// 문제 (2525)
// KOI 전자에서는 건강에 좋고 맛있는 훈제오리구이 요리를 간편하게 만드는 인공지능 오븐을 개발하려고 한다.
//  인공지능 오븐을 사용하는 방법은 적당한 양의 오리 훈제 재료를 인공지능 오븐에 넣으면 된다.
//  그러면 인공지능 오븐은 오븐구이가 끝나는 시간을 분 단위로 자동적으로 계산한다.
// 또한, KOI 전자의 인공지능 오븐 앞면에는 사용자에게 훈제오리구이 요리가 끝나는 시각을 알려 주는 디지털 시계가 있다.

// 훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때, 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.

// 첫째 줄에는 현재 시각이 나온다. 현재 시각은 시 A (0 ≤ A ≤ 23) 와 분 B (0 ≤ B ≤ 59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다.
// 두 번째 줄에는 요리하는 데 필요한 시간 C (0 ≤ C ≤ 1,000)가 분 단위로 주어진다.

// 첫째 줄에 종료되는 시각의 시와 분을 공백을 사이에 두고 출력한다. (단, 시는 0부터 23까지의 정수, 분은 0부터 59까지의 정수이다.
// 디지털 시계는 23시 59분에서 1분이 지나면 0시 0분이 된다.)

// 유추 파악
// 현재 시각과 소요시간을 입력 받고 완료시각 출력하기

fs = require("fs");

filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/BAEKJOON/txt/baek2525.txt";
inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

let hour = inputs[0];
let minute = inputs[1];
let time = inputs[2];
let complete = minute + time;
let overHour = Math.floor(hour + complete / 60);
let overMinute = complete % 60;

if (complete < 60) {
  console.log(`${hour} ${complete}`);
} else {
  if (overHour == 24) {
    overHour = 0;
    console.log(`${overHour} ${overMinute}`);
  } else {
    console.log(`${overHour} ${overMinute}`);
  }
}
