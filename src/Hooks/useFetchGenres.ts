import { useEffect, useState } from "react";
import ApiClient from "../Services/Api-Client";

export interface Genres {
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
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    ApiClient.get<GenresResult>("/genres")
      .then((resp) => {
        setGenreInfo(resp.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setNavErrors(err.message);
        setIsLoading(false);
      });
  }, []);

  return { genreInfo, navErrors, isloading };
};

export default useFetchGenres;
