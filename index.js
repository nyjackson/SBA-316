const navBar = document.getElementById("top-nav");
const navMenuLinks = ["New Quiz", "Quiz Results"];

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

{
  //in progress, in {} so not to break ^
}
function placeSymbol(e) {
  const ticO = document.createElement("i");
  ticO.classList.add("fa-solid","fa-o");
  const target = e.target
  console.log(target)
  target.appendChild(ticO)
}
