import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { House } from "lucide-react";

function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  return (
    <div>
      <nav>
        <button>
          <Link to="/dashboard">
            <House />
          </Link>
        </button>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
