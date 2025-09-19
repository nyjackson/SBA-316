const app = document.getElementById("app");
const navBar = document.getElementById("top-nav");
const commentList = document.getElementById("comment-list");
const commentButton = document.getElementById("og-comment");
const form = document.querySelector("form");
const navMenuLinks = ["Clear Votes", "Clear Comments"];

let likeCounter = 0;
let dislikeCounter = 0;

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

function createComment() {
  commentList.textContent = ""
  commentList.style.textAlign = "left"
  if(commentList.style.display == "none"){
    commentList.style.display = "block"
  }
  const frag = document.createDocumentFragment();
  let commentResponse = window.prompt("Enter your comment:");
  let userResponse = window.prompt("Enter a name:");

  if(!commentResponse || commentResponse == ""){
    window.alert("Comment cannot be empty!")
    return
  }
  if(!userResponse || userResponse == ""){
    userResponse = "Anon"
  }
  if(commentResponse.length > 200){
    window.alert("Comment must be under 200 characters!")
    return
  }

  const comment = document.createElement("div");
  comment.textContent = commentResponse;
  comment.classList.add("comment");
  frag.appendChild(comment);

  const p = document.createElement("p");
  p.textContent = "- " + userResponse;
  comment.appendChild(p);
  commentList.prepend(frag);
}

function updateCounter() {
  const p = document.getElementById("counters");
  p.textContent = `Likes: ${likeCounter} Dislikes: ${dislikeCounter}`;
}

function addVote(e) {
  e.preventDefault();
  let choices = form.querySelectorAll("input");
  console.log(choices);
  for (let i = 0; i < choices.length; i++) {
    console.log(choices[i]);
    if (choices[i].checked == true) {
      choices[i].value == "like" ? likeCounter++ : dislikeCounter++;
      window.alert(`Your ${choices[i].value} vote has been submitted!`);
      updateCounter();
    }
  }
}

function clearActions(e) {
  console.log(e.target.textContent)
  if (e.target.textContent == "Clear Votes") {
    const p = document.getElementById("counters");
    likeCounter = 0;
    dislikeCounter = 0;
    p.textContent = `Likes: ${likeCounter} Dislikes: ${dislikeCounter}`;
  } else if (e.target.textContent == "Clear Comments") {
    while (commentList.firstChild) {
      commentList.removeChild(commentList.firstChild);
    }
    commentList.style.display = "none"

  }
}

createNavBar();
navBar.addEventListener("click", clearActions)
form.addEventListener("submit", addVote);
commentButton.addEventListener("click", createComment);
