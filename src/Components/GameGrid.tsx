import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useFetchGame from "../Hooks/useFetchGame";

function GameGrid() {
  const { gameinfo, appError } = useFetchGame();

  return (
    <SimpleGrid columns={4} spacing={3}>
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
