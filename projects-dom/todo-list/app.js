import { todos } from "./todos.js"

const body = document.body // shortcut
//.querySelector("body")

// cssText => sets multiple CSS rules at once on the style tag
body.style.cssText = `
    margin: 0;
    height: 100vh;
    display: grid;
    place-items: center;
`

// create container
const divContainer = document.createElement("div")
divContainer.style.border = "1px solid black"
divContainer.style.height = "300px"
divContainer.style.width = "400px"

body.appendChild(divContainer)

// loop over todos, create HTML items and place them inside containr

todos.forEach((todo) => {
  // convert todo DATA to HTML element
  const divTodo = document.createElement("div") // div NODE

  // SET styles manually, item by item
  // divTodo.style.display = "flex"
  // divTodo.style.justifyContent = "space-around"
  // divTodo.style.height = "30px"

  // set multiple styles "CSS like" all at one
  divTodo.style.cssText = `
    display: flex;
    justify-content: space-between;
    padding: 10px;
  `

  // SPECIFIC style for each item
  switch (todo.status) {
    case "Open":
      divTodo.style.backgroundColor = "red"
      break
    case "Ongoing":
      divTodo.style.backgroundColor = "yellow"
      break
    case "Done":
      divTodo.style.backgroundColor = "green"
      break
    default:
      console.log(
        `[WARNING] Status ${todo.status} unknown! Please fix, basterd!`
      )
      break
  }

  // create details elements for flexbox (title, category, status)
  const divTitle = document.createElement("div")
  const divCategory = document.createElement("div")
  const divStatus = document.createElement("div")

  // fill in info into subitems (=columns)
  divTitle.innerText = todo.title
  divStatus.innerText = todo.status

  divStatus.style.cursor = "pointer"

  // create SUBcategories
  const spanCategoryTitle = document.createElement("span")
  const ulSubCats = document.createElement("ul")

  spanCategoryTitle.innerText = todo.category
  spanCategoryTitle.style.cursor = "pointer"

  ulSubCats.style.display = "none"

  // fill subcategories with loop
  // build up LI html array
  const arrLis = todo.subcategories.map((subcat) => {
    return `<li>${subcat}</li>`
  })
  const strLis = arrLis.join("") // merges all LI strings in arrayto ONE string
  ulSubCats.innerHTML = strLis

  // build category item
  divCategory.appendChild(spanCategoryTitle)
  divCategory.appendChild(ulSubCats)

  // add subitem to todo row
  divTodo.appendChild(divTitle)
  divTodo.appendChild(divCategory)
  divTodo.appendChild(divStatus)

  // hide / show subcategories
  spanCategoryTitle.addEventListener("click", (evt) => {
    const spanClicked = evt.target
    const ul = spanClicked.nextSibling
    const displayCurrent = ul.style.display

    // toggle visibility of UL
    // ternary is often to toggle string values (everything not true / false)
    ulSubCats.style.display = displayCurrent === "block" ? "none" : "block"
  })

  // switch status if status span is clicked
  divStatus.addEventListener("click", () => {
    const status = divStatus.textContent // Open, Ongoing, Done

    // depending on status => switch to NEW status & style
    switch (status) {
      case "Open":
        divStatus.innerText = "Ongoing"
        divTodo.style.backgroundColor = "yellow"
        break
      case "Ongoing":
        divStatus.innerText = "Done"
        divTodo.style.backgroundColor = "green"
        break
      case "Done":
        divStatus.innerText = "Open"
        divTodo.style.backgroundColor = "red"
        break
    }
  })

  // innerHTML makes sense if you want to have NESTED info for an item
  // that is just for DISPLAYING (but no event listeners)
  // in case you wanna use EVENT LISTENERS => prefer creating DOM nodes with createElement 

  // divTodo.innerHTML = `
  //   <span >${todo.title}</span>
  //   <span >${todo.category}</span>
  //   <span>${todo.status}</span>
  // `

  // add element to container
  divContainer.appendChild(divTodo)
})
