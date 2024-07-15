import { useContext ,createContext } from "react"
export const ThemeMode=createContext({
    theme : "light",
    darkTheme : ()=>{},
    lightTheme : ()=>{},
})

export const ThemeProvider=ThemeMode.Provider

export default function useTheme()
{
    return useContext(ThemeMode)
}


