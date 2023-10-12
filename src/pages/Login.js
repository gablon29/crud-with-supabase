import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  console.log(email);

  return (
    <div>
      <form>
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
