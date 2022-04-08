
console.log("Here we are, dude!")


// Fetching der DOM nodes (=HTML Elements)
const button = document.querySelector(".btnShowHide")
const divCities = document.querySelector(".cities")
const divCounter = document.querySelector(".counter")

console.log( button )
console.log( divCities )


// VISIBILITY (CSS)

// 1. display: none / display: block
// 2. visibility: hidden / visibility: visible
// 3. opacity: 0 / opacity: 1 
// 4. z-index

// make button clickable
let showCities = true 
let counter = 0

button.addEventListener("click", () => {

  console.log("Click - current status of cities", showCities)

  counter++
  divCounter.innerText = counter
  
  // cities are visible? 
  if( showCities ) {
    console.log("Hiding cities")
    showCities = false    

    // hide cities div
    // divCities.style.display = "none"
    divCities.style.visibility = "hidden"
    button.innerText = "Show cities" // toggle text of button
  }
  // cities are invible => show them!
  else {
    console.log("Showing cities")
    showCities = true

    // make cities div visible!
    // divCities.style.display = "block"
    divCities.style.visibility = "visible"
  }
  console.log("Click handler")
})

