import { useContext } from "react";
import { AuthContext } from "../context/basicContext";
const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
