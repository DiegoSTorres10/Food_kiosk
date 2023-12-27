import { useContext } from "react";
import QuioscoContext from "../context/QuiscoProvider";


// Con esta funcion es para acceder a los valores del QuiscoContext
const useQuiosco = () => {
    return useContext(QuioscoContext)
}

export default useQuiosco