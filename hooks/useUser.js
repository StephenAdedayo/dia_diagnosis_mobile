import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function useUser(){

    const context = useContext(UserContext)

    if(!context){
        throw new Error("context must be within the provider")
    }
 return context
}