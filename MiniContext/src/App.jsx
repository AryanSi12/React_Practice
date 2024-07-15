import { useState } from 'react'
import Login from './Login'
import './App.css'
import Profile from './Profile'
import UserContextProvider from './UserContext/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
