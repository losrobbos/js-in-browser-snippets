
console.log( "Hallo, ich laufe im Browser! Hättest du nicht gedacht, ne?" )


// GRAB BUTTON
// const btn = document.querySelector("#btn")
const btn = document.querySelector("button")


// MAKE BUTTON CLICKABLE

// Register CLICK event listener

btn.addEventListener("click", () => {
  console.log(btn)
  console.log("Du Sau hast mich geklickt!")
  btn.style.backgroundColor = "green"
})