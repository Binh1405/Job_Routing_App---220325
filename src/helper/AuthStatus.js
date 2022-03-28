import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

function AuthStatus() {
  let auth = useAuth();
  console.log("auth", auth);
  const navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user.username}!{" "}
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
