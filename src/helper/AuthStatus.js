import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/basicContext";

function AuthStatus() {
  let auth = useContext(AuthContext);
  const navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}
export default AuthStatus;
