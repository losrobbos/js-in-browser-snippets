import { set } from 'lodash';
import { useState } from 'react';
import './App.css';

function App() {

  // DATEN
  const person = {
    name: "Sara",
    profession: "JavaScript Engineer"
  }

  // NO STATE array !
  const [arrPeople, setArrPeople] = useState([ 
    { _id: "1", name: "Hamzah" },
    { _id: "2", name: "Michael" },
    { _id: "3", name: "Susan" },
  ])

  // when React convert the JSX to HTML and sends it to the BROWSER DOM
  // => this is called: RENDERING


  // EVENT LISTENERS
  const onAddPerson = () => {
    
    const name = prompt("New name pleeeze: ")

    if(!name) return // exit if no name given

    // => IMMUTABILITY Pattern
    // arrPeople.push({ id: "4", name: "Alaa" }) // this is not allowed! no direct mutating of state
    
    // we create a COPY of the state variable and mutate the COPY!
    // const arrPeopleCopy = [...arrPeople]
    // arrPeopleCopy.push( { id: "4", name: "Alaa" } )
    const arrPeopleCopy = [
      ...arrPeople, // take all OLD items
      { _id: Date.now().toString(), name: name }, // merge with NEW item
    ]

    // OVERWRITE state with COPY
    // set function is the TRIGGER for the DOM UPDATE
    setArrPeople( arrPeopleCopy )
  }

  // delete some person on click
  const onDeletePerson = (idToDelete) => {

    // filter out person we wanna delete => filter creates a NEW array
    const arrPeopleKeep = arrPeople.filter(person => person._id !== idToDelete )

    // update state and DOM
    setArrPeople( arrPeopleKeep )
  }

  // UPDATE an object in an array
  const onEditPerson = (idToUpdate) => {
    const nameNew = prompt("New name pleeeeze")
    console.log(nameNew)

    // ONLY update if user confirmed
    if(!nameNew) return

    // update

    const arrPeopleUpdated = arrPeople.map( person => {
      return person._id === idToUpdate ? {...person, name: nameNew } : person  
    })

    // update state & re-render DOM
    setArrPeople( arrPeopleUpdated )
  }

    const onUpdateAll = () => {
      const arrPeopleAllChanged = arrPeople.map((person) => ({
        ...person,
        name: person.name + " DCI",
      }))
      setArrPeople(arrPeopleAllChanged)
    }



  // convert ARRAY of OBJECTs to ARRAY of JSX
  const jsxPeople = arrPeople.map( (person) => (
    <div key={ person._id } >
      <span>{person.name}</span>
      <button onClick={ () => onEditPerson( person._id ) }>E</button>
      <button onClick={ () => onDeletePerson(person._id) }>X</button>
    </div>
  ))

  // JSX => Javascript XML
  // LAYOUT + DATA
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello from state, dudes</h2>
        {/* LIST OF PEOPLE */}
        <div style={{ margin: "10px", border: "1px solid #ccc" }}>
          {jsxPeople}
        </div>

        <button onClick={onAddPerson}>Add Person</button>
        <button onClick={onUpdateAll}>Update all people</button>

        {/* render the string "hallo" into HTML */}
        {/* <div>{"hallo"}</div>
        <div>{1 + 2}</div>
        <div>{"hallo" + " " + "welt"}</div> */}

        {/* rendering an OBJECT does not work! */}
        {/* <div>{ person }</div> */}

        {/* react can ONLY render PRIMITIVE data (strings, numbers, boolean) */}
        {/* <div>
          {person.name} {person.profession}
        </div>
        <div>{arrPeople[0].name}</div> */}
      </header>
    </div>
  )
}

export default App;
