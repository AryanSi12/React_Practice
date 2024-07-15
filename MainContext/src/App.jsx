import { useState ,useEffect } from 'react'
import Card from './Components/Card'
import Themebtn from './Components/Themebtn'
import { ThemeProvider } from './Context.js/Context'
function App() {
  const [theme,setTheme]=useState("light")
  const lightTheme=()=>{
    setTheme("light")
  }
  const darkTheme=()=>{
    setTheme("dark")
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(theme)
  }, [theme])
  return (
    <ThemeProvider value={{theme, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center bg-red-300">
          <div className="w-full">
            <div className=" w-full max-w-lg mx-auto">
            <Themebtn/>
            <Card/>
            </div>
      
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
