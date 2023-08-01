import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <div className='App'>
        <Button count={count} setCount={setCount} />
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


// function Button(props) {
//   console.log("props: ", props)
//   return <button
//     onClick={() => { props.setCount(props.count + 1) }  }>
//           {props.count}</button>
// }

function Button({count, setCount}) {
  console.log("props deconstruction: ", count, setCount)
  return <button
    onClick={() => {setCount(count + 1) }}>
    {count}</button>
}

export default App
