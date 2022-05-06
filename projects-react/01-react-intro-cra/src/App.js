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
    console.log("Item clicked")

    // the following LINE IS WRONG!
    // we tried to change the state array DIRECTLY!
    // we are NOT allowed to MUTATE a state variable DIRECTLY
    // => IMMUTABILITY Pattern
    // arrPeople.push({ id: "4", name: "Alaa" })
    
    // we create a COPY of the state variable and mutate the COPY!
    const arrPeopleCopy = [...arrPeople]
    arrPeopleCopy.push( { id: "4", name: "Alaa" } )

    // OVERWRITE state with COPY
    // set function is the TRIGGER for the DOM UPDATE
    setArrPeople( arrPeopleCopy )
  }

  // convert ARRAY of OBJECTs to ARRAY of JSX
  const jsxPeople = arrPeople.map( (person, index) => (
    <div key={ index } >{person.name}</div>
  ))

  // JSX => Javascript XML
  // LAYOUT + DATA
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello from state, dudes</h2>
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

        {/* LIST OF PEOPLE */}
        <div style={{ margin: "10px", border: "1px solid #ccc" }}>
          {jsxPeople}
        </div>

        <button onClick={onAddPerson}>Add Person</button>

      </header>
    </div>
  )
}

export default App;
