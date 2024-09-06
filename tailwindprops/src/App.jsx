import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Ankit",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 mb-4 rounded-xl p-4'> Tailwind test</h1>
      <Card username="chaiaurcode1" btnText="click me"/>
      <Card username="chaiaurcode2" btnText="visit me"/>
    </>
  )
}

export default App
