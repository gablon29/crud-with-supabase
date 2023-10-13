import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { client } from "./supabase/client";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    client.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
