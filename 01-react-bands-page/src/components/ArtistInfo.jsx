import { useSelector } from "react-redux";

const ArtistInfo = ({ img }) => {
  const { id, name, description } = useSelector((state) => state.band);
  return (
    <article className="artist-info">
      <h2>{name}</h2>
      <p>{id}</p>
      <img src={img} alt={name} />
      <p>{description}</p>
    </article>
  );
};

export default ArtistInfo;
