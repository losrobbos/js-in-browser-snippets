const person2 = {
  name: {
    firstName: "Rob",
  },
}

const displayName = ({ name: { firstName: first } }) => {
  console.log(first)
}

displayName(person2)

// const cardBauen = (person) => {

/**
 * person => { name: { first, last }}
 * { name: { first: firstName, last: lastName }}
 */

const cardBauen = ({ name: { first: firstName, last: lastName } }) => {
  console.log(firstName)
  console.log(lastName)
}

const person = {
  name: {
    first: "Rob",
    last: "Ristock",
  },
}

// cardBauen( person )
