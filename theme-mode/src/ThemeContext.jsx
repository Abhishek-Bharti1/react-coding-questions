import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";



const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);
    const toggleTheme = () => {
        
        setTheme((prev) => !prev);
    };
  const mode = theme ? "dark" : "light";

  useEffect(()=>{
  document.documentElement.setAttribute("data-theme",mode);
  },[mode]);
    return <ThemeContext.Provider value={{ mode, toggleTheme }}>
            {children}
    </ThemeContext.Provider>
}