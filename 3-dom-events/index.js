// <!-- 1. DOM QUERYING => get Element by either ID, class oder sonstiges  -->
const button = document.querySelector(".btnSubmit")
console.log( "Button", button )

// <!-- 2. EVENT LISTENER => bei CLICK mach etwas -->
button.addEventListener("click", (e) => {
  console.log("I was clicked, yayyyy") 
  console.log( "Event: ", e )
})

