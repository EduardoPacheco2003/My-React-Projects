import articMonkeysImg from "../assets/Arctic-Monkeys.jpg";
import franzFerdinandImg from "../assets/franz-ferdinand.jpg";
import theMariasImg from "../assets/the-marias.jpg";
import cageTheEImg from "../assets/cage-the-elephant.jpg";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <main className="vh-100">
        <h1 className="text-center">Pagina principal bandas</h1>
        <section className="bands-gallery grid-1-2">
          <article className="gallery-band">
            <img src={articMonkeysImg} alt="Arctic Monkeys" />
            <div className="gallery-shadow">
              <Link to={"/arctic-monkeys"}>
                <h3>Arctic Monkeys</h3>
              </Link>
            </div>
          </article>
          <article className="gallery-band">
            <img src={franzFerdinandImg} alt="Franz Fernidand" />
            <div className="gallery-shadow">
              <Link to={"/franz-ferdinand"}>
                <h3>Franz Ferdinand</h3>
              </Link>
            </div>
          </article>
          <article className="gallery-band">
            <img src={theMariasImg} alt="The Marias" />
            <div className="gallery-shadow">
              <Link to="/the-marias">
                <h3>The Marías</h3>
              </Link>
            </div>
          </article>
          <article className="gallery-band">
            <img src={cageTheEImg} alt="Cage The Elephant" />
            <div className="gallery-shadow">
              <Link to="/cage-the-elephant">
                <h3>Cage The Elephant</h3>
              </Link>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default MainPage;
