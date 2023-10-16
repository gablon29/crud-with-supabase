import React from "react";
import { client } from "../supabase/client";
import TaskForm from "../components/TaskForm";
export default function Home() {
  return (
    <div>
      <h1>Hola mundo</h1>
      <button onClick={() => client.auth.signOut()}>Logout</button>
      <TaskForm />
    </div>
  );
}
