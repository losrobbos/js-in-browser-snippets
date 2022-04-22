const arrPeople = [
  { name: "Susan", professions: ["Frontend", "Backend", "AI", "GameDev"] },
  { name: "Yamen", professions: ["JavaScript", "AI", "GameDev"] },
]

const divPeople = document.querySelector(".people")

arrPeople.forEach( person => {
  const divPerson = document.createElement("div")

  let htmlPerson = `<div>${person.name}</div>`
  let htmlProfessions = ""

  // reduce => reduces an ARRAY to ONE item => z.B. String

  // loop through professions array
  person.professions.forEach( profession => {
    htmlProfessions += `<span>${profession}</span>`
  })
  htmlPerson += `<div>${htmlProfessions}</div>`

  divPerson.innerHTML = htmlPerson

  // append HTML tag to container
  divPeople.appendChild( divPerson )
})