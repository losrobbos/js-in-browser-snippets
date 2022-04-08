// MODULE

// DOM Items
const divPerson = document.querySelector(".person")
const button = document.querySelector("button")


const person = {
  name: "Rami",
  specialization: "HTML / CSS"
}

// STATE (=> copies of data)
let personCopy = { ...person } // Create an initial copy of person

// WRITE RAMIS current state to DOM
divPerson.innerText = personCopy.name + " " + personCopy.specialization

// UPDATE Ramis state in DOM on click
button.addEventListener("click", () => {

  // CHANGE on object (with SPREAD OPERATOR)
  // the COPY of the object will trigger a change in the DOM
  const specializationNew = personCopy.specialization === "JavaScript" ? "HTML / CSS" : "JavaScript"
  personCopy = { ...personCopy, specialization: specializationNew }

  // MANUALLY DO CHANGE TO  DOM 
  // (=> later this will be done automatically ... with React magic ;)
  divPerson.innerText = personCopy.name + " " + personCopy.specialization
})
