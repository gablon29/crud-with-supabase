import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { client } from "./supabase/client";
import { TaskContextProvider } from "./context/TaskContext";

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
      <TaskContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TaskContextProvider>
    </div>
  );
}

export default App;
