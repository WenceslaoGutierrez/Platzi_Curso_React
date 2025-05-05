import { useState, createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './components/Counter/Counter'
import './App.css'

const ThemeContext = createContext();

function ThemeProvider ({children}) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>{
    setTheme((prevTheme) => (prevTheme==="light" ? "dark" : "light"))
  }
  

  return(
    <ThemeContext.Provider  value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

function ThemeButton(){
  const {theme, toggleTheme}=useContext(ThemeContext);

  const buttonClass =
    theme === "light"
      ? "bg-white text-black border border-gray-300"
      : "bg-black text-white border border-gray-700";
  

  return(
    <>
      <button onClick={toggleTheme} className={`px-4 py-2 rounded transition shadow ${buttonClass}`}>
        Change theme
      </button>
    </>
  )
}

function App() {

  return (
    <>
      <ThemeProvider>
        <ThemeButton/>
      </ThemeProvider>
    </>
  );
}

export default App
