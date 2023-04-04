import {
  HStack,
  Image,
  List,
  ListItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import useFetchGenres from "../Hooks/useFetchGenres";

function GenreMenu() {
  const { genreInfo, navErrors } = useFetchGenres();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <List>
        {genreInfo.map((data) => (
          <ListItem key={data.id}>
            <HStack spacing={2} padding={2}>
              <Image
                boxSize={"35px"}
                src={data.image_background}
                borderRadius={5}
              ></Image>
              <Text>{data.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreMenu;
