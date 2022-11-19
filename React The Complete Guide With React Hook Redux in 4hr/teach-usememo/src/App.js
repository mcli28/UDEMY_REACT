import React, {useState, useMemo} from 'react'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import './App.css'

function App() {
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)
  const incrementA = () => {
    setCountA(countA+1)
  }
  const incrementB = () => {
    setCountB(countB+1)
  }
  const memoComponentA = useMemo(() => {
    return <ComponentA count={countA}/>
  },[countA])

  return (
    <div className="App">
      App js Count A: {countA}
      <p>
        <button onClick={incrementA}>Increment A</button>
      </p>
      <p>
        <button onClick={incrementB}>Increment B</button>
      </p>
      {memoComponentA}
      <p></p>
      <ComponentB count={countB}/>
    </div>
  );
}

export default App;
