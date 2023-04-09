import { useState, useEffect } from "react";
import ApiClient from "../Services/Api-Client";
import { Genres } from "./useFetchGenres";
import { GameQuery } from "../App";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

export interface Gameinfo {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  added: number;
  platforms: { platform: Platforms }[];
}

interface Apidata {
  count: number;
  results: Gameinfo[];
}

const useFetchGame = (gameQuery: GameQuery, deps?: any[]) => {
  const [gameinfo, setGameInfo] = useState<Gameinfo[]>([]);

  const [appError, setAppError] = useState("");

  const [isloading, setIsLoading] = useState(false);

  useEffect(
    () => {
      setIsLoading(true);
      ApiClient.get<Apidata>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.order,
        },
      })
        .then((res) => {
          setGameInfo(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          setAppError(err.message);
          setIsLoading(false);
        });
    },
    deps ? [...deps] : []
  );

  return { gameinfo, appError, isloading };
};

export default useFetchGame;
