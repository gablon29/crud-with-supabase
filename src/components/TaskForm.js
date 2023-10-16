import React, { useState } from "react";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(taskName);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskName"
          placeholder="Escribe tu tarea"
          onChange={(event) => setTaskName(event.target.value)}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
};

export default TaskForm;
