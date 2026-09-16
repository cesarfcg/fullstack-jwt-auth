import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { House } from "lucide-react";
import { LogOut } from "lucide-react";

function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
        <div className="container">
          <Link to="/dashboard" className="navbar-brand fw-bold d-flex align-items-center gap-2">
            <House size={20} /> Dashboard{" "}
          </Link>
          <div className="d-flex align-items-center">
            <button onClick={handleLogout} className="btn btn-outline-danger btn-sm d-flex align-items-center gap-2">
              <LogOut size={17} /> Logout
            </button>
          </div>
        </div>
      </nav>
      <main className="container py-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
