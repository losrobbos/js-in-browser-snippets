
const divDisplay = document.querySelector(".display")
const divVisibility = document.querySelector(".visibility")
const divOpacity = document.querySelector(".opacity")

console.log( divDisplay)
console.log( divVisibility)
console.log( divOpacity)

divDisplay.addEventListener("click", (e) => {
  console.log("Display item clicked")
  const clickedItem = e.target

  clickedItem.style.display = "grid"

})
divVisibility.addEventListener("click", (e) => {
  console.log("Visibility item clicked")
  const clickedItem = e.target

  clickedItem.style.visibility = "visible"
})
divOpacity.addEventListener("click", (e) => {
  console.log("Opacity item clicked")
  const clickedItem = e.target

  clickedItem.style.opacity = 1
})
