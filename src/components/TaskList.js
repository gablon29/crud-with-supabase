import React, { useEffect } from "react";
import { useTask } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, getTask } = useTask();
  useEffect(() => {
    getTask();
  }, []);
  console.log(tasks);
  return <div>TaskList</div>;
};

export default TaskList;
