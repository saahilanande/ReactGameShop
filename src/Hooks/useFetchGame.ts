import { useState, useEffect } from "react";
import ApiClient from "../Services/Api-Client";

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

const useFetchGame = () => {
  const [gameinfo, setGameInfo] = useState<Gameinfo[]>([]);

  const [appError, setAppError] = useState("");

  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    ApiClient.get<Apidata>("/games")
      .then((res) => {
        setGameInfo(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setAppError(err.message);
        setIsLoading(false);
      });
  }, []);

  return { gameinfo, appError, isloading };
};

export default useFetchGame;
