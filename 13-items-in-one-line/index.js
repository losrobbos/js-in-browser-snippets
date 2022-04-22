const arrPeople = [
  { name: "Susan", professions: ["Frontend", "Backend", "AI", "GameDev"] },
  { name: "Yamen", professions: ["JavaScript", "AI", "GameDev"] },
]

const divPeople = document.querySelector(".people")

arrPeople.forEach( person => {
  const divPerson = document.createElement("div")

  let htmlPerson = `<div>${person.name}</div>`

  // loop through professions array using foreach to BUILD UP professions HTML string
  person.professions.forEach((profession) => {
    htmlProfessions += `<span>${profession}</span>`
  })

  // alternative: reduce
  // reduce => reduces an ARRAY to ONE item => z.B. String
  // loop through professions array using REDUCE to BUILD UP professions HTML string
  // const htmlProfessions = person.professions.reduce(
  //   (htmlProfessions, profession) => {
  //     return htmlProfessions + `<span>${profession}</span>`
  //   },
  //   ""
  // )

  // combine person info with professions info HTML
  htmlPerson += `<div>${htmlProfessions}</div>`

  // place HTML string in new DOM element 
  divPerson.innerHTML = htmlPerson

  // append new HTML tag to container
  divPeople.appendChild(divPerson)
})