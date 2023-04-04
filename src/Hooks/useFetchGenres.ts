import { useEffect, useState } from "react";

interface Genres {
  id: number;
  name: string;
  games_count: string;
  image_background: string;
}

interface GenresResult {
  results: Genres;
}

const useFetchGenres = () => {
  const [genreInfo, setGenreInfo] = useState<GenresResult[]>();
  const [errors, setErrors] = useState("");

  useEffect(()=>{
    
  })
};

export default useFetchGenres;
