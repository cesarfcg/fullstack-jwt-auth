import { useState } from "react";
import { registerUser } from "../api/client.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("USER");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const user = {
      username,
      email,
      role,
      password,
    };

    try {
      const data = await registerUser(user);

      console.log(data);
      navigate("/auth/login");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 border" style={{ width: "100%", maxWidth: "380px" }}>
        <h2 className="text-center mb-4">Criar conta</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" value={username} onChange={(event) => setUsername(event.target.value)} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Tipo de usuário</label>
            <select className="form-select" value={role} onChange={(event) => setRole(event.target.value)}>
              <option value="USER">Usuário</option>
              <option value="ADMIN">Administrador</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} required />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Criar conta
          </button>
        </form>

        <p className="text-center mt-3 mb-0 small">
          Já possui uma conta? <Link to="/auth/login">Entrar</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
