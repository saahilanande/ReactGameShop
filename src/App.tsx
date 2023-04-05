import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreMenu from "./Components/GenreMenu";
import { useState } from "react";
import { Genres } from "./Hooks/useFetchGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

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
            <GenreMenu onGenreClick={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
