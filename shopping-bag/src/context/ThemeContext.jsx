import { createContext, useState } from "react";


const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [bag,setBag] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const values = {
        cartAmount,
        setCartAmount,
        bag,
        setBag
    }
    console.log(bag);
    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;