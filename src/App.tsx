import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreMenu from "./Components/GenreMenu";
import { useState } from "react";
import { Genres } from "./Hooks/useFetchGenres";
import PlatfromFilter from "./Components/PlatfromFilter";
import { Platforms } from "./Hooks/useFetchPlatform";
import SortingGames from "./Components/SortingGames";

export interface GameQuery {
  genre: Genres | null;
  platform: Platforms | null;
  order: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav" bg="gold">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="black">
            <GenreMenu
              selectedGenre={gameQuery.genre}
              onGenreClick={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main" padding={2}>
          <HStack>
            <PlatfromFilter
              platformInfoProp={gameQuery.platform}
              onFilterItemClick={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortingGames
              sortedOrder={gameQuery.order}
              onSortClick={(order) => setGameQuery({ ...gameQuery, order })}
            />
          </HStack>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
