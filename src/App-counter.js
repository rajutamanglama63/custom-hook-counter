// import { useState } from 'react'
import useCounter from './useCounter'
const App = (props) => {
  // const [counter, setCounter] = useState(0)

  const counter = useCounter();
  const buttonCounter = useCounter();

  return (
    <div>
      <div>
        <h1>Counter</h1>
        <div>{counter.value}</div>
        <button onClick={counter.increase}>
          plus
        </button>
        <button onClick={counter.decrease}>
          minus
        </button>      
        <button onClick={counter.zero}>
          zero
        </button>
      </div>

      <div>
        <h1>Button counter</h1>
        <div>{buttonCounter.value}</div>
        <button onClick={buttonCounter.increase}>
          plus
        </button>
        <button onClick={buttonCounter.decrease}>
          minus
        </button>      
        <button onClick={buttonCounter.zero}>
          zero
        </button>
      </div>
    </div>
  )
}

export default App;
