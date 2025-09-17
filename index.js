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

function createQuestion(){ 
  const frag = document.createDocumentFragment()
  const div = document.createElement("div")
  const question = document.createElement("h2")
  question.textContent = q;
  div.appendChild(question)
  const choices = document.createElement("form")
  for(let i = 0; i < answers.length; i++){
    const container = document.createElement("div")
    const choice = document.createElement("input")
    const label = document.createElement("label")
    choice.setAttribute("type", "radio")
    choice.setAttribute("name",i)
    label.setAttribute("for", i)
    label.textContent = answers[i]
    container.appendChild(choice)
    container.appendChild(label)

    //choice.classList.add("q-answer")
    choices.appendChild(container)
  }
  frag.appendChild(div)
  app.appendChild(frag)
  //return frag
  // const template = document.getElementsByTagName("template")[0]
  // const clone = template.content.cloneNode(true)
  // app.appendChild(clone)
}

createQuestion()

function buildQuiz(){
  const form = document.createElement("form")
  return
}