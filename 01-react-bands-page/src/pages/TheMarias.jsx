import ArtistInfo from "../components/ArtistInfo";
import { Loader } from "../components/Loader";
import Message from "../components/Message";
import { useSelector } from "react-redux";
import { useFetchArtist } from "../hooks/useFetchArtist";
import theMariasImg from "../assets/the-marias.jpg";

const TheMarias = () => {
  const { name } = useSelector((state) => state.band);
  let artistId = 1127174;
  const { error, loading } = useFetchArtist(artistId);
  return (
    <>
      <section className="vh-100">
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {!loading && name && <ArtistInfo img={theMariasImg} />}
      </section>
    </>
  );
};

export default TheMarias;
