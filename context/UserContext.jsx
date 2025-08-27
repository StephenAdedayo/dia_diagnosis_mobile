import { useRouter } from "expo-router";
import { createContext } from "react";

export const UserContext = createContext()


const UserContextProvider = ({children}) => {

    const navigate = useRouter()
return (
    <UserContext.Provider value={{navigate}}>
        {children}
    </UserContext.Provider>
)
}

export default UserContextProvider