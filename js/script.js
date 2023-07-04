const question = [
  {
    que: "which is the client side language",
    a: "html",
    b: "javascript",
    c: "css",
    d: "php",
    correct: "b",
  },
  {
    que: "which is the javascript popular front end framework",
    a: "sprigboot",
    b: "React",
    c: "Node",
    d: "Laraval",
    correct: "b",
  },
  {
    que: "React is the choose the correc option",
    a: "virtual dom ",
    b: "Real dom",
    c: "mvc framework",
    d: "initial 2010",
    correct: "b",
  },
];

let index = 0;
let total = question.length;
let correct = 0,
  incorrect = 0;

let passBox = document.getElementById("questionBox");
let inputPassBox = document.querySelectorAll('input[type="radio"]');

const loadQuestion = () => {

    if(total === index){
        return QuizEnd()
    }
    reset();
  const data = question[index];
  passBox.innerHTML = `${index + 1}) ${data.que}`;

  inputPassBox[0].nextElementSibling.innerText = data.a;
  inputPassBox[1].nextElementSibling.innerText = data.b;
  inputPassBox[2].nextElementSibling.innerText = data.c;
  inputPassBox[3].nextElementSibling.innerText = data.d;
}
  document.querySelector("#submit").addEventListener("click", function () {
    const data = question[index];
    const ans = getAnswer();

    if (ans === data.correct) {
      correct++;
    } else {
      incorrect++;
    }
    index++;
    loadQuestion();
  });

  const getAnswer = () => {
    let ans;
    inputPassBox.forEach((input) => {
      if (input.checked) {
        ans = input.value;
      }
    });

    return ans;
  };



  const reset = () => {
    inputPassBox.forEach((input) => {
      input.checked = false;
    });
  };

  const QuizEnd = () => {
      document.getElementsByClassName('container')[0].innerHTML = `
      
      <div class= 'col'>
      <h3 class='w-100'>Hi,You are a scroed is ${correct}/${total}</h3>
      </div>
      `
  };

loadQuestion();
