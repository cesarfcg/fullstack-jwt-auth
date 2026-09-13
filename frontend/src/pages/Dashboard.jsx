import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../api/client.js";

function Dashboard() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function loadUser() {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
      }
    }
    loadUser();
  }, []);

  return (
    <div>
      {user && (
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Olá, {user.username}!</h5> <p className="card-text mb-1"> Usuário autenticado </p>
            <span className="badge bg-primary">ROLE : {user.role} </span>
          </div>
        </div>
      )}
      <Link to="/users">Listar usuários</Link>
    </div>
  );
}
export default Dashboard;
