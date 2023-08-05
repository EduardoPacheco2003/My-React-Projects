import { useSelector } from "react-redux";
import { useFetchArtist } from "../hooks/useFetchArtist";
import { Loader } from "../components/Loader";
import ArtistInfo from "../components/ArtistInfo";
import Message from "../components/Message";
import arcticMonkeysImg from "../assets/Arctic-Monkeys.jpg";

const ArcticMonkeys = () => {
  const { name } = useSelector((state) => state.band);
  let artistId = 12297;
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
        {!loading && name && <ArtistInfo img={arcticMonkeysImg} />}
      </section>
    </>
  );
};

export default ArcticMonkeys;
