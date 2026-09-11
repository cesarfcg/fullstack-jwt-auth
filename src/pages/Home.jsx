import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <p>olá</p>
      <Link to="/list-users">Listar usuários</Link>
    </div>
  );
}
export default Home;
