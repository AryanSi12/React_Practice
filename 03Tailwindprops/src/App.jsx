import { useState } from 'react'
import './App.css'
import Card from './components/Card'
/*In tailwind we need to make sure every tag mus have closing / also we can pass some props like shown in this case
with the card component */
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-2 '>Tailwind</h1>
      <Card username="Aryan" visit="visit me"/>
      <Card username="Ajay" visit="click me"/>
    </>
  )
}

export default App
