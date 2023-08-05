import ArtistInfo from "../components/ArtistInfo";
import { Loader } from "../components/Loader";
import Message from "../components/Message";
import { useSelector } from "react-redux";
import { useFetchArtist } from "../hooks/useFetchArtist";
import cageImg from "../assets/cage-the-elephant.jpg";

const CageTheElephant = () => {
  const { name } = useSelector((state) => state.band);
  let artistId = 8339;
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
        {!loading && name && <ArtistInfo img={cageImg} />}
      </section>
    </>
  );
};

export default CageTheElephant;
