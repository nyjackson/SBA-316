const navBar = document.getElementById("top-nav");
const app = document.getElementById("app")
const commentList = document.getElementById("comment-list")
const commentButton = document.getElementById("og-comment")
const form = document.querySelector("form")
const navMenuLinks = ["Account", "Settings"];
const footer = document.getElementById("footing")

let likeCounter = 0
let dislikeCounter = 0

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

function createComment(){
  const frag = document.createDocumentFragment()
  let commentResponse = window.prompt("Enter your comment:")
  let userResponse = window.prompt("Enter a name:")
  console.log(commentResponse)
  const comment = document.createElement("div")
  comment.textContent = commentResponse
  comment.classList.add("comment")
  comment.setAttribute("maxlength",50) //don't think it works
  frag.appendChild(comment)
  
  const p = document.createElement("p")
  p.textContent = "- " + userResponse
  comment.appendChild(p)
  commentList.prepend(frag)
}

function updateCounter(){
  const p = document.getElementById("counters")
  p.textContent = `Likes: ${likeCounter} Dislikes: ${dislikeCounter}`
  footer.appendChild(p)
}

function addLikeOrDislike(e){
e.preventDefault()
let choices = form.querySelectorAll("input")
console.log(choices)
for(let i = 0; i < choices.length;i++){
  console.log(choices[i])
  if(choices[i].checked == true){
    choices[i].value == "like" ? likeCounter++ : dislikeCounter++
    window.alert(`Your ${choices[i].value} vote has been submitted!`)
    updateCounter()
  }
}

}
commentButton.addEventListener("click", createComment)
form.addEventListener("submit", addLikeOrDislike)
