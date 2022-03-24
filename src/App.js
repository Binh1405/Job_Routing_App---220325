import "./App.css";
import SearchAppBar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import JobPage from "./pages/JobPage";
// import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./context/AuthProvider";
import Layout from "./pages/Layout";
import RequireAuth from "./helper/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <SearchAppBar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />}>
            <Route index element={<Mainpage />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/jobs/:jobId"
          element={
            <RequireAuth>
              <JobPage />
            </RequireAuth>
          }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
