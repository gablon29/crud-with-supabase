import { createContext, useContext, useState } from "react";
import { client } from "../supabase/client";

export const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);

  return context ? context : new Error("No hay contexto");
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTask = async () => {
    let { data: tareas, error } = await client.from("tareas").select("*");
    return error ? error : setTasks(tareas);
  };

  return (
    <TaskContext.Provider value={{ tasks, getTask }}>
      {children}
    </TaskContext.Provider>
  );
};
