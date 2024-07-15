import { useState } from 'react'
import Header from './Header/Header'
import Home from './Items/Home'
import Footer from './Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>  
      <Home/>
      <Footer/>
    </>
  )
}

export default App
