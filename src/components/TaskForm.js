import React, { useState } from "react";
import { client } from "../supabase/client";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      data: { user },
    } = await client.auth.getUser();
    const { data, error } = await client
      .from("tareas")
      .insert([{ name: taskName, user_id: user.id }])
      .select();
    console.log(data);
    console.error(error.message);
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
