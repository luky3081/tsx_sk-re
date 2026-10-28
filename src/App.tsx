import { useState } from 'react'
import './App.css'

function Skore() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  if (count1 > count2) {
    var vysledek = "Vyhrává domácí tým"
  } else if (count1 < count2) {
    var vysledek = "Vyhrává hostující tým"
  } else {
    var vysledek = "Hra je nerozhodná"
  }

  return (
    <>
      <section id="center">
        <div className="score-panel reset-panel">
          <h2>Resetovat skóre</h2>
          <button
            type="button"
            onClick={() => {
              setCount1(0)
              setCount2(0)
            }}
          >
            Reset
          </button>
        </div>

        <div className="score-panel">
          <h1>Skóre domácích</h1>
          <p>{count1}</p>
          <button
            type="button"
            className="counter"
            onClick={() => setCount1((count1) => count1 + 1)}
          >
            +1
          </button>
        </div>

        <div className="score-panel">
          <h1>Skóre hostů</h1>
          <p>{count2}</p>
          <button
            type="button"
            className="counter"
            onClick={() => setCount2((count2) => count2 + 1)}
          >
            +1
          </button>
        </div>

        <div className="result-panel">
          <h1>{vysledek}</h1>
        </div>
      </section>
      <section id="spacer"></section>
    </>
  )
}
export default Skore
