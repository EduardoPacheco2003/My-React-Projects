import { useContext } from "react";
import AuthContext from "../context/authContext";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <section style={{ textAlign: "center" }} className="vh-100">
      <h2>Tu perfil:</h2>
      <h4>{user.id}</h4>
      <h3>Nombre: {user.name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Usuario: {user.user}</h3>
    </section>
  );
};

export default ProfilePage;
