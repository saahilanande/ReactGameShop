import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreMenu from "./Components/GenreMenu";
import { useState } from "react";
import { Genres } from "./Hooks/useFetchGenres";
import PlatfromFilter from "./Components/PlatfromFilter";
import { Platforms } from "./Hooks/useFetchGame";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platforms | null>(
    null
  );

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
              selectedGenre={selectedGenre}
              onGenreClick={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main" padding={2}>
          <PlatfromFilter
            platformInfoProp={selectedPlatform}
            onFilterItemClick={(data) => setSelectedPlatform(data)}
          />
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
