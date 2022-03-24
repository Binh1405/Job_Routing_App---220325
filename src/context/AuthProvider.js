import { useState } from "react";
import fakeAuthProvider from "../helper/auth";
import { AuthContext } from "./basicContext";

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [password, setPassword] = useState(null);

  let signin = (newUser, newPassword, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      setPassword(newPassword);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      setPassword(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
