console.log('Script ist da! To your service!');

const starNodes = document.querySelectorAll('.star');

// querySelectorAll gives us back a NodeList (!) array 
// => that is not (!) a normal array
// => it is a special array which has no normal array functions, just forEach
// => but not .map(), .slice() or other array functions
// => in order to use normal array functions on this list, we need to convert it to a normal JS array
const starsAll = Array.from( starNodes )

// for EACH star item => create a click listener 
starsAll.forEach( star => {

  star.addEventListener("click", (event) => {
    const starClicked = event.target

    // get index position of clicked star within array of stars...
    const indexNum = starsAll.indexOf( starClicked )

    // grab a slice of all stars until clicked star (including clicked star => so we need index+1)
    const starsRating = starsAll.slice(0, indexNum+1)

    // uncolor all star items (= delete any previous rating)
    starsAll.forEach( star => {
      star.style.backgroundColor = "#ccc"
    })

    // loop through EACH star to color => and give it rating color
    starsRating.forEach( star => {
      star.style.backgroundColor = "yellow"
    })

  })
})

