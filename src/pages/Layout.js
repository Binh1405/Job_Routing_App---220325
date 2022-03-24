import { Link, Outlet } from "react-router-dom";
import AuthStatus from "../helper/AuthStatus";

function Layout() {
  return (
    <div>
      <AuthStatus />
      <Outlet />
    </div>
  );
}
export default Layout;
