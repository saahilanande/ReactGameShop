import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  color,
} from "@chakra-ui/react";
import useFetchGenres, { Genres } from "../Hooks/useFetchGenres";

interface props {
  onGenreClick: (genre: Genres) => void;
}

function GenreMenu({ onGenreClick }: props) {
  const { genreInfo, navErrors, isloading } = useFetchGenres();

  if (navErrors) return null;

  if (isloading) return <Spinner />;

  return (
    <>
      <Box marginLeft={5}>
        <Heading size={"lg"}>Genres</Heading>
        <List padding={3}>
          {genreInfo.map((data) => (
            <ListItem key={data.id}>
              <HStack spacing={2} padding={2}>
                <Image
                  boxSize={"35px"}
                  src={data.image_background}
                  borderRadius={5}
                ></Image>
                <Button
                  onClick={() => {
                    onGenreClick(data);
                  }}
                  variant={"ghost"}
                >
                  {data.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}

export default GenreMenu;
