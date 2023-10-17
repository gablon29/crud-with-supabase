import { createContext } from "react";

const TaskContext = createContext();
const TaskContextProvider = ({ children }) => {
  return <TaskContext.Provider>{children}</TaskContext.Provider>;
};
