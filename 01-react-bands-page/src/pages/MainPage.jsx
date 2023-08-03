import Header from "../components/Header";
import articMonkeysImg from "../assets/Arctic-Monkeys.jpg";
import franzFerdinandImg from "../assets/franz-ferdinand.jpg";
import theMariasImg from "../assets/the-marias.jpg";
import cageTheEImg from "../assets/cage-the-elephant.jpg";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/counterSlice";
import Footer from "../components/Footer";

const MainPage = () => {
  const count = useSelector((state) => state.counter.value);
  const countHundred = useSelector((state) => state.counter.valueHundred);
  const dispatch = useDispatch();
  console.log(count);

  const handleIncrement = () => {
    dispatch(increment());
  };
  return (
    <>
      <Header />
      <main>
        <h1 className="text-center">Pagina principal bandas</h1>
        <section className="bands-gallery grid-1-2">
          <article className="gallery-band">
            <img src={articMonkeysImg} alt="Arctic Monkeys" />
            <div className="gallery-shadow">
              <h3>Arctic Monkeys</h3>
            </div>
          </article>
          <article className="gallery-band">
            <img src={franzFerdinandImg} alt="Franz Fernidand" />
            <div className="gallery-shadow">
              <h3>Franz Ferdinand</h3>
            </div>
          </article>
          <article className="gallery-band">
            <img src={theMariasImg} alt="The Marias" />
            <div className="gallery-shadow">
              <h3>The Marías</h3>
            </div>
          </article>
          <article className="gallery-band">
            <img src={cageTheEImg} alt="Cage The Elephant" />
            <div className="gallery-shadow">
              <h3>Cage The Elephant</h3>
            </div>
          </article>
        </section>
        {/* <h3>Contador: </h3>
        <h4 style={{ textAlign: "center", border: "thick solid red" }}>
          {count} ----- {countHundred}
        </h4>
        <button onClick={handleIncrement}>Incrementar</button> */}
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
