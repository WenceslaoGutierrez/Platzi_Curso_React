import { useState, createContext, useContext, ReactNode } from 'react'

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider ({children}: {children: React.ReactNode}):ReactNode {
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
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("ThemeContext must be used within a ThemeProvider");
    }

    const { theme, toggleTheme } = context;
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

function ContextApi() {
    return (
      <>
        <ThemeProvider>
          <ThemeButton />
        </ThemeProvider>
      </>
    )
  }

export default ContextApi;