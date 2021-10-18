import { useContext } from "react"
import { AuthContext } from "../Componants/Context/AuthProvider";


const useAuth=()=>{
  return  useContext(AuthContext);
}
export default useAuth;