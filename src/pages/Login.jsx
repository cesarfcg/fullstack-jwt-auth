import { useState } from "react";
import { authenticateUser } from "../api/client.js";
import { Link, useNavigate } from "react-router-dom";

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
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 border" style={{ width: "100%", maxWidth: "380px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" value={username} onChange={(event) => setUsername(event.target.value)} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} required />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>

        <p className="text-center mt-3 mb-0 small">
          Não possui uma conta? <Link to="/auth/register">Criar conta</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
