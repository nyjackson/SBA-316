const navBar = document.getElementById("top-nav")
const navMenuLinks = ["New Game", "Top Scores"];
const board = document.getElementById("board")


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

function createTicTacBox(){
    for(let i = 0; i < 3;i++){
        const row = document.createElement("div")
        row.classList.add("row")
        for(let j = 0; j < 3; j++){
            const box = document.createElement("div")
            box.classList.add("box")
            row.appendChild(box)
        }
        board.appendChild(row)
    }
}

createNavBar()
createTicTacBox()