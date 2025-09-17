const navBar = document.getElementById("top-nav");
const app = document.getElementById("app")
const commentList = document.getElementById("comment-list")
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
  const commentBox = document.createElement("div")
  //const comment = document.createElement("input")
  commentList.prependChild(frag)
}