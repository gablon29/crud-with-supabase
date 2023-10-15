import React, { useState } from "react";
import { client } from "../supabase/client";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await client.auth.signInWithOtp({
        email,
      });
      alert("revisa tu correo");
      console.log(result);
    } catch (error) {
      console.error(error.massage);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          name="email"
          type="email"
          value={email}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Login;
