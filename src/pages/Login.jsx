import { useState } from "react";
import { authenticateUser } from "../api/client.js";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const credentials = {
      username,
      password,
    };
    try {
      const data = await authenticateUser(credentials);
      console.log("JWT:", data);
      localStorage.setItem("token", data);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <button type="submit">Entrar</button>
      </form>

      <Link to="/register">Criar conta</Link>
    </div>
  );
}

export default Login;
