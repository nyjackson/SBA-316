const navBar = document.getElementById("top-nav")
const navMenuLinks = ["New Game", "Top Scores"];

function createNavBar(){
    const ul = document.createElement("ul")
    ul.classList.add("nav-bar")
    for(let i = 0; i < navMenuLinks.length; i++){
        const li = document.createElement("li")
        li.classList.add("nav-link")
        li.textContent = navMenuLinks[i]
        ul.appendChild(li)
    }
    navBar.appendChild(ul)
}

createNavBar()