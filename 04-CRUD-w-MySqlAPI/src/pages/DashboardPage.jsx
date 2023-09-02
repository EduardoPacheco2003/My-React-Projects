import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    await logoutUser();
    navigate("/");
  };
  return (
    <main className="u-container">
      <h1>Dashboard</h1>
      <h2>Bienvenido:</h2>
      <h3>
        {user.id} - {user.username}
      </h3>
      <h4>{user.email}</h4>
      <nav>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </main>
  );
};

export default DashboardPage;
