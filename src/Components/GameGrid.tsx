import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useFetchGame from "../Hooks/useFetchGame";
import CardSkeleton from "./CardSkeleton";
import { Genres } from "../Hooks/useFetchGenres";
import { Platforms } from "../Hooks/useFetchPlatform";

interface props {
  selectedGenre: Genres | null;
  selectedPlatform: Platforms | null;
}

function GameGrid({ selectedGenre, selectedPlatform }: props) {
  const { gameinfo, appError, isloading } = useFetchGame(
    selectedGenre,
    selectedPlatform,
    [selectedGenre?.id]
  );

  const skeletonNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3}>
      {isloading && skeletonNo.map((id) => <CardSkeleton key={id} />)}

      {gameinfo.map((data) => (
        <GameCard
          background_image={data.background_image}
          name={data.name}
          platforms={data.platforms}
          id={data.id}
          key={data.id}
          metacritic={data.metacritic}
          added={data.added}
        />
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
