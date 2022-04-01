// <!-- 1. DOM QUERYING => get Element by either ID, class oder sonstiges  -->
const buttons = document.querySelectorAll('.btnSubmit');
console.log('Buttons', buttons);

// MULTIPLE ELEMENTS
// if we want to make MULTIPLE elements clickable
// we must LOOP through them
// and add an event listener to every SINGLE element
buttons.forEach((button) => {

  // <!-- 2. EVENT LISTENER => bei CLICK mach etwas -->
  button.addEventListener('click', (e) => {

    const target = e.target // target = the element that was clicked!

    console.log('I was clicked, yayyyy');
    console.log('Target: ', target);

    target.style.color = "red"
    target.style.backgroundColor = "yellow"

    target.remove()

    // ACHTUNG: CSS Properties mit Bindestrichen => werden zu CamelCase
    // background-color => backgroundColor
    // text-align => textAlign
    // background-size => backgroundSize

    // style.cssText => beliebiges CSS direkt auf Element setzen
    // target.style.cssText = "color: red; background-color: yellow"
  });
});
