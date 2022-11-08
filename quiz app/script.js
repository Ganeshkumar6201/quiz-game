const iter = true;
const questions = [
  {
    id: 1,
    q: "what is the capital of india",
    options: [
      { option1: "delhi", isCorrect: true },
      { option2: "jharkhand", isCorrect: false },
      { option3: "kolkata", isCorrect: false },
      { option4: "mumbai", isCorrect: false },
    ],
  },

  {
    id: 2,
    q: "what is the color of sky",
    options: [
      { option1: "green", isCorrect: false },
      { option2: "blue", isCorrect: true },
      { option3: "yellow", isCorrect: false },
      { option4: "red", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "what is the value of 2+2",
    options: [
      { option1: 6, isCorrect: false },
      { option2: 4, isCorrect: true },
      { option3: 8, isCorrect: false },
      { option4: 12, isCorrect: false },
    ],
  },
];

function iterate(id) {
  var res = document.getElementsByClassName("result");
  res.innerText = "";

  document.getElementById("question").innerText = questions[id].q;

  const opt1 = document.getElementById("op1");
  opt1.innerText = questions[id].options[0].option1;
  opt1.value = questions[id].options[0].isCorrect;

  const opt2 = document.getElementById("op2");
  opt2.innerText = questions[id].options[1].option2;
  opt2.value = questions[id].options[1].isCorrect;

  const opt3 = document.getElementById("op3");
  opt3.innerText = questions[id].options[2].option3;
  opt3.value = questions[id].options[2].isCorrect;

  const opt4 = document.getElementById("op4");
  opt4.innerText = questions[id].options[3].option4;
  opt4.value = questions[id].options[3].isCorrect;

  var selected = "";

  opt1.addEventListener("click", () => {
    opt1.style.backgroundColor = "lightgoldenrodyellow";
    opt2.style.backgroundColor = "lightskyblue";
    opt3.style.backgroundColor = "lightskyblue";
    opt4.style.backgroundColor = "lightskyblue";
    selected = opt1.value;
  });
  opt2.addEventListener("click", () => {
    opt1.style.backgroundColor = "lightskyblue";
    opt2.style.backgroundColor = "lightgoldenrodyellow";
    opt3.style.backgroundColor = "lightskyblue";
    opt4.style.backgroundColor = "lightskyblue";
    selected = opt2.value;
  });

  opt3.addEventListener("click", () => {
    opt1.style.backgroundColor = "lightskyblue";
    opt2.style.backgroundColor = "lightskyblue";
    opt3.style.backgroundColor = "lightgoldenrodyellow";
    opt4.style.backgroundColor = "lightskyblue";
    selected = opt3.value;
  });

  opt4.addEventListener("click", () => {
    opt1.style.backgroundColor = "lightskyblue";
    opt2.style.backgroundColor = "lightskyblue";
    opt3.style.backgroundColor = "lightskyblue";
    opt4.style.backgroundColor = "lightgoldenrodyellow";
    selected = opt4.value;
  });

  const evaluate = document.getElementsByClassName("evaluate");
  evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
      res[0].innerText = "True";
      res[0].style.backgroundColor = "green";
    } else {
      res[0].innerText = "False";
      res[0].style.backgroundColor = "red";
    }
  });
}

// if (iter) {
//   iterate(0);
// }
iterate(0);

const next = document.getElementsByClassName("next");
var id = 0;
next[0].addEventListener("click", () => {
  //   iter = false;
  if (id < 2) {
    id++;
    iterate(id);
  }
});
