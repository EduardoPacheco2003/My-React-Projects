import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setbandData } from "../features/bandSlice";

export const useFetchArtist = (artistId) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let url = `https://api.genius.com/artists/${artistId}?access_token=rUYF3NBW4ROWSMSJfmT7mKEdAYfRU-Tx1bKFyjgkGPHJGJ6rXdjmuk95drxxyJ0q&text_format=plain`;

  useEffect(() => {
    const fetchData = async (url) => {
      const options = {
        method: "GET", // Método de la petición (en este caso, una solicitud GET)
        headers: {
          // Cabecera para especificar que se acepta el tipo de contenido 'application/json'
          Accept: "application/json",
        },
      };
      setLoading(true);
      try {
        const response = await fetch(url, options);
        // console.log(response);
        if (!response.ok) {
          const err = {
            error: true,
            status: response.status || "00",
            statusText:
              response.statusText ||
              "Ocurrio un error y la API no trae mensaje",
          };
          throw err;
        }

        const data = await response.json();
        if (data.meta.status >= 400) {
          const err = {
            error: true,
            status: data.status || "00",
            statusText: data.message,
          };
          throw err;
        }
        // console.log(data.response.artist);
        dispatch(setbandData(data.response.artist));
      } catch (error) {
        console.log("ERROR:");
        console.log(error);
        setError(error);
      }
      setLoading(false);
    };
    fetchData(url);
  }, [url, dispatch]);

  return { error, loading };
};
