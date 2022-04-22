const btnFetch = document.querySelector(".btnFetch")

// on click => fetch todos

// by using ASYNC we tell the browser, this function is NON blocking
btnFetch.addEventListener("click", async () => {

  // 1. Step => call the API (to get the data)

  // TRY this code 
  // => we can not 100% be sure if it will always work (e.g. API could be down!)
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    console.log(response)

    // 2. Step => extract the data from the response

    // extract the data from the response BODY using the JSON parser function
    // "await" will make sure to UNPACK the data from the promise box that the parser returns
    const todos = await response.json()
    console.log(todos)

    const divTodos = document.querySelector(".todos")

    //  loop over recevied todos
    todos.forEach( todo => {
      const divTodo = document.createElement("div")
      divTodo.innerHTML = `<h3>${ todo.title }</h3>`
      divTodos.appendChild( divTodo ) // place new HTML item inside container
    })
  }
  // err => { message }
  catch(err) {
    console.log( err )

    // grab error div
    document.querySelector(".errors").innerText = 
      "Ihr Browser ist zu langsam. Versuchen Sie es später nochmal"
  }

})
