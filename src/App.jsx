import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0);



  return (
    <div>
      <h1>Simple Counter - ReactJS</h1>
      <button onClick={()=>{
        setCount(count-1);
      }}
      >-</button>
      <span >{count}</span>
        <button onClick={()=> {
            setCount(count+1);
        }}
        >+</button>

        <h2>
            Another Counter:{count}
        </h2>

        <p>Total payment:{count * 5} </p>
    </div>
  );
}

export default App;