import { useState } from "react";
import { registerUser } from "../api/client.js";
import { Link } from "react-router-dom";
function Register() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("USER");
  const [password, setPassword] = useState("");

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
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="container mt-5">
      <h1>Criar conta</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome</label>

          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>

          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo de usuário</label>

          <select
            className="form-select"
            value={role}
            onChange={(event) => setRole(event.target.value)}
          >
            <option value="USER">Usuário</option>
            <option value="ADMIN">Administrador</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Senha</label>

          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Criar conta
        </button>
      </form>
      <Link to="/login">Já tenho uma conta</Link>
    </div>
  );
}

export default Register;
