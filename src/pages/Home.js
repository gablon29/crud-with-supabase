import React from "react";
import { client } from "../supabase/client";

export default function Home() {
  return (
    <div>
      <h1>Hola mundo</h1>
      <button onClick={() => client.auth.signOut()}>Logout</button>
    </div>
  );
}
