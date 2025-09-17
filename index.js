const navBar = document.getElementById("top-nav");
const app = document.getElementById("app")
const commentList = document.getElementById("comment-list")
const commentButton = document.getElementById("og-comment")
const navMenuLinks = ["Account", "Settings"];

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
  let user = window.prompt("Enter your name:")
  let commentResponse = window.prompt("Enter your comment:")
  console.log(commentResponse)
  const comment = document.createElement("div")
  comment.textContent = commentResponse
  comment.classList.add("comment")
  frag.appendChild(comment)
  commentList.prepend(frag)
}

commentButton.addEventListener("click", createComment)