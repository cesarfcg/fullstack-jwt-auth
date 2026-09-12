import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center py-5">
      <h1 className="display-5 fw-bold">Bem-vindo à aplicação!</h1>

      <p className="lead text-muted mt-3">Uma aplicação desenvolvida com React e Spring Boot.</p>

      <div className="mt-4">
        <Link to="/auth/login" className="btn btn-primary me-2">
          Entrar
        </Link>

        <Link to="/auth/register" className="btn btn-outline-primary">
          Criar conta
        </Link>
      </div>
    </div>
  );
}

export default Home;
