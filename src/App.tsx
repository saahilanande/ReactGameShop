import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreMenu from "./Components/GenreMenu";
import { useState } from "react";
import { Genres } from "./Hooks/useFetchGenres";
import PlatfromFilter from "./Components/PlatfromFilter";
import { Platforms } from "./Hooks/useFetchPlatform";
import SortingGames from "./Components/SortingGames";
import GameHeading from "./Components/GameHeading";

export interface GameQuery {
  genre: Genres | null;
  platform: Platforms | null;
  order: string;
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav">
          <Navbar
            resetFilter={() =>
              setGameQuery({
                ...gameQuery,
                search: "",
                order: "",
                platform: null,
                genre: null,
              })
            }
            handleSearch={(search) => setGameQuery({ ...gameQuery, search })}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenreMenu
              selectedGenre={gameQuery.genre}
              onGenreClick={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main" padding={2}>
          <Box padding={3}>
            <GameHeading gameQuery={gameQuery} />
          </Box>
          <Flex>
            <Box margin={2} marginLeft={3}>
              <PlatfromFilter
                platformInfoProp={gameQuery.platform}
                onFilterItemClick={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </Box>

            <Box margin={2}>
              <SortingGames
                sortedOrder={gameQuery.order}
                onSortClick={(order) => setGameQuery({ ...gameQuery, order })}
              />
            </Box>
          </Flex>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
