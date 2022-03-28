import "./App.css";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import JobPage from "./pages/JobPage";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./helper/RequireAuth";
import AuthStatus from "./helper/AuthStatus";

function App() {
  return (
    <>
      <AuthStatus />
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<Mainpage />} />
          <Route
            path="/jobs/:jobId"
            element={
              <RequireAuth>
                <JobPage />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
