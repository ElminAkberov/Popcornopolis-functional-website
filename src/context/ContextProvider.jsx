import { createContext, useState } from "react"
import { MdLocalDining } from "react-icons/md"

const Context = createContext()
const ContextProvider = ({ children }) => {
    const localBasket = JSON.parse(localStorage.getItem("basket")) || []
    console.log(localBasket);

    const [basket, setBasket] = useState(localBasket)
    const [token, setToken] = useState("");
    return <Context.Provider value={[basket, setBasket, token, setToken]}>{children}</Context.Provider>
}
export default ContextProvider
export { Context }