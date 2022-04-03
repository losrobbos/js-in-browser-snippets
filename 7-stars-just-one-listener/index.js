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

    // check WHICH star (=index !) was clicked by checking CSS variable on the item (=> --i)
    const indexString = getComputedStyle(starClicked).getPropertyValue('--i') // value between 0 and 4 !

    // CSS properties are always strings 
    // => so we need to convert it to a number first if we wanna "calculate" with it
    const indexNum = parseInt(indexString) 

    // grab a slice until that item from all stars
    const starsToColor = starsAll.slice(0, indexNum+1)

    // uncolor all star items (= delete any previous rating)
    starsAll.forEach( star => {
      star.style.backgroundColor = "#ccc"
    })

    // loop through EACH star to color => and give it rating color
    starsToColor.forEach( star => {
      star.style.backgroundColor = "yellow"
    })

  })
})

