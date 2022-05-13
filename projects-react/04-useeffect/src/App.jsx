
import { useEffect, useState } from 'react'
import './App.css'

// Hooks
// 1. useState
// 2. useEffect
// 3. useContext

function App() {

  // start state => EMPTY!
  const [items, setItems] = useState([])

  console.log("1. App js rendering...")

  // UseEffect is valled AFTER first render

  // LOAD initial data from external source (= API)

  // in UseEffect we usually fetch data (and use Promises for that)
  useEffect(() => {

    console.log("3. Use Effect was called....")

    // simulate: fetching data from API (it will take 5 seconds)
    setTimeout(() => {
      const datafromApi = [1, 2, 3]
      setItems( datafromApi )
      console.log("4. Data Fetching finished...")
    }, 5000)

  }, []) // empty array means => just execute useEffect AFTER FIRST RENDER

  
  // Event handler
  const updateItems = () => {
    setItems([...items, items.length + 1])
  }

  console.log("2. Rendering JSX")
 
  // render JSX to HTML
  return (
    <div className="App">
      <header className="App-header">
        <h2>Use Effect in action</h2>
        {
          items.map( item => <div key={item}>{ item }</div>)
        }
        <button onClick={updateItems}>Change state</button>
      </header>
    </div>
  )
}

export default App
