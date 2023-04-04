import { useEffect, useState } from "react";
import ApiClient from "../Services/Api-Client";

interface Genres {
  id: number;
  name: string;
  games_count: string;
  image_background: string;
}

interface GenresResult {
  results: Genres[];
}

const useFetchGenres = () => {
  const [genreInfo, setGenreInfo] = useState<Genres[]>([]);
  const [navErrors, setNavErrors] = useState("");

  useEffect(() => {
    ApiClient.get<GenresResult>("/genres")
      .then((resp) => setGenreInfo(resp.data.results))
      .catch((err) => setNavErrors(err.message));
  }, []);

  return { genreInfo, navErrors };
};

export default useFetchGenres;
