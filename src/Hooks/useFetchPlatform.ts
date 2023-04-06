import { useEffect, useState } from "react";
import ApiClient from "../Services/Api-Client";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

interface PlatformObject {
  results: Platforms[];
}

const useFetchPlatforms = () => {
  const [platformInfo, setPlatformInfo] = useState<Platforms[]>([]);

  const [platformError, setPlatformError] = useState("");

  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    ApiClient.get<PlatformObject>("/platforms")
      .then((res) => {
        setPlatformInfo(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setPlatformError(err);
        setIsLoading(false);
      });
  }, []);

  return { platformInfo, platformError, isloading };
};

export default useFetchPlatforms;
