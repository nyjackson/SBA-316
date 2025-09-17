const navBar = document.getElementById("top-nav");
const app = document.getElementById("app")
const navMenuLinks = ["New Quiz", "Quiz Results"];
const questions = ["lorem", "ipsum?"];
const answers = ["lorem", "ipsum?"];
function createNavBar() {
  const ul = document.createElement("ul");
  ul.classList.add("nav-bar");
  for (let i = 0; i < navMenuLinks.length; i++) {
    const li = document.createElement("li");
    li.classList.add("nav-link");
    li.textContent = navMenuLinks[i];
    ul.appendChild(li);
  }
  navBar.appendChild(ul);
}
createNavBar();

function createQuestion(q, answers){ 
  const frag = document.createDocumentFragment()
  const div = document.createElement("div")
  const question = document.createElement("h2")
  question.textContent = q;
  div.appendChild(question)
  const choices = document.createElement("form")
  for(let i = 0; i < answers.length; i++){
    const choice = document.createElement("input")
    choice.setAttribute("type", "radio")
    //choice.classList.add("q-answer")
    choices.appendChild(choice)
  }
  frag.appendChild(div)
  app.appendChild(frag)
  //return frag
}

createQuestion("Random?",answers)

function buildQuiz(){
  const form = document.createElement("form")
  return
}