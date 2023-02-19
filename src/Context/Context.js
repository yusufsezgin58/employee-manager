import { createContext, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    let EMPLOYEES = [
    ]

    const [employees, setEmployees] = useState(EMPLOYEES)
    const [theme, setTheme] = useState("light")

    const data = {
        employees, setEmployees, theme, setTheme
    }

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;