import ArtistInfo from "../components/ArtistInfo";
import { Loader } from "../components/Loader";
import Message from "../components/Message";
import { useSelector } from "react-redux";
import { useFetchArtist } from "../hooks/useFetchArtist";
import franzImg from "../assets/franz-ferdinand.jpg";

const FranzFerdinand = () => {
  const { name } = useSelector((state) => state.band);
  let artistId = 21216;
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
        {!loading && name && <ArtistInfo img={franzImg} />}
      </section>
    </>
  );
};

export default FranzFerdinand;
