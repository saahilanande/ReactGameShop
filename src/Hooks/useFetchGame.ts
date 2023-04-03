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
  platforms: { platform: Platforms }[];
}

interface Apidata {
  count: number;
  results: Gameinfo[];
}

const useFetchGame = () => {
  const [gameinfo, setGameInfo] = useState<Gameinfo[]>([]);

  const [appError, setAppError] = useState("");

  useEffect(() => {
    ApiClient.get<Apidata>("/games")
      .then((res) => setGameInfo(res.data.results))
      .catch((err) => setAppError(err.message));
  }, []);

  return { gameinfo, appError };
};

export default useFetchGame;
