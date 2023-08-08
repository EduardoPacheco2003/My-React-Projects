import { useState } from "react";
import maizenaImg from "../assets/maizena.webp";
import mariImg from "../assets/mari.jpg";

const MainPage = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <main className="vh-100">
      <h1>Bienvenido a la pagina principal</h1>
      {/* <h3>(Privado)</h3> */}
      {toggle ? (
        <img src={mariImg} alt="Marihuana" />
      ) : (
        <img src={maizenaImg} alt="Maizena" />
      )}

      <button onClick={handleToggle}>Hacer Marihuana</button>
    </main>
  );
};

export default MainPage;
