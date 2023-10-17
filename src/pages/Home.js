import React from "react";
import { client } from "../supabase/client";
import TaskForm from "../components/TaskForm";
import { useTask } from "../context/TaskContext";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <div>
      <h1>Hola mundo</h1>
      <button onClick={() => client.auth.signOut()}>Logout</button>
      <TaskForm />
      <TaskList />
    </div>
  );
}
