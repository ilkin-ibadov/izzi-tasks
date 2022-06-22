const app = document.getElementById("app");
const nav = document.createElement("nav");
const wordGame = document.createElement("h1");
wordGame.innerText = "Word Game";
nav.appendChild(wordGame);
app.appendChild(nav);
const dash = document.createElement("div");
dash.setAttribute("id", "dash");
const time = document.createElement("div");
time.appendChild(document.createTextNode("Time:"));
time.setAttribute("id", "time");
dash.appendChild(time);
nav.appendChild(dash);
const score = document.createElement("div");
score.setAttribute("id", "score");
score.appendChild(document.createTextNode("Score:"));
dash.appendChild(score);
const start = document.createElement("button");
start.innerHTML = "Start";
start.setAttribute("id", "start");
dash.appendChild(start);
const main = document.createElement("main");
const info = document.createElement("div");
info.setAttribute("id", "info");
info.appendChild(document.createTextNode("How To Play"));
const brk = document.createElement("br");
info.appendChild(brk);
info.appendChild(document.createTextNode("Click the start button to begin"));
const brk1 = document.createElement("br");
info.appendChild(brk1);
info.appendChild(document.createTextNode("Find as many words as you can"));
const brk2 = document.createElement("br");
info.appendChild(brk2);
info.appendChild(
  document.createTextNode("You only have 30 seconds for each word")
);
const brk3 = document.createElement("br");
info.appendChild(brk3);
info.appendChild(
  document.createTextNode(
    'If you want to change the word, click the "Next Word" button'
  )
);
main.appendChild(info);
const game = document.createElement("div");
game.setAttribute("id", "game");
main.appendChild(game);
const controlButtons = document.createElement("div");
controlButtons.setAttribute("id", "controlButtons");
main.appendChild(controlButtons);

const next = document.createElement("button");
next.innerText = "Next Word";
controlButtons.appendChild(next);

const hint = document.createElement("button");
hint.innerText = "Hint...";
controlButtons.appendChild(hint);

app.appendChild(main);

const words = [
  "jerusalem",
  "damascus",
  "stockholm",
  "amsterdam",
  "baku",
  "pyongyang",
  "kingstown",
  "kingstone",
  "tokyo",
  "london",
];

const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// words.map((word) => {
//     const letters = word.split('')
//     console.log(letters)
// })

// for(let i = 0; i < words.length; i++){
//   const letter = words[i].split('')
//   console.log(letter)
// }

let i = 0;

const wordContainer = document.createElement("div");
wordContainer.setAttribute("id", "wordContainer");
game.appendChild(wordContainer);
const keyContainer = document.createElement("div");
keyContainer.setAttribute("id", "keyContainer");
game.appendChild(keyContainer);
function nextQuestion() {
  wordContainer.innerHTML = "";
  keyContainer.innerHTML = "";
  if (i < words.length - 1) {
    ++i;
    const letters = words[i].split("");
    letters.forEach((letter) => {
      const wordBox = document.createElement("div");
      wordBox.setAttribute("id", "wordBox");
      wordBox.innerText = letter;
      wordContainer.appendChild(wordBox);
    });
    

    keys.forEach((key) => {
      const keyBox = document.createElement("div");
      keyBox.addEventListener('click', (e) => {
        checkMatch(e)
      })
      keyBox.setAttribute("id", "keyBox");
      keyBox.innerText = key;
      keyContainer.appendChild(keyBox);
      function checkMatch(e){
      if(letters.includes(e.target.innerText)){
        e.target.style.backgroundColor = 'green'
        // wordBox.innerText = e.target.innerText
        console.log(e.target.innerText)
      }}
    });
  }
}

next.addEventListener("click", () => {
  nextQuestion();
});




