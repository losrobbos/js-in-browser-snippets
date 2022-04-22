const btnFetch = document.querySelector(".btnFetch")

console.log(btnFetch)

// on click => fetch todos
btnFetch.addEventListener("click", () => {
  // 1. Step => call the API (to get the data)

  //fetch gives me back a promise. a promise is a BOX where we need to UNPACK the conent

  const promResponse = fetch("https://jsonplaceholder.typicode.com/todos")
  console.log(promResponse)

  // THEN handler unpacks the Promise => so we get the content
  // 2. Step => read the response
  promResponse.then((response) => {
    // Callback in then => is called once we RECEIVED the response!
    console.log(response)

    // 3. Step => parse the DATA inside the response

    // JSON parser delivers Promise => WHY? => because it could BLOCK the browser AND it could fail
    const promJson = response.json()
    console.log(promJson)

    // THEN handler UNPACKS the data in the box
    promJson.then((jsonData) => {
      console.log(jsonData)
    })
  })
})
